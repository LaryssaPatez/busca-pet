package com.edu.unisagrado.buscapet.controller;

import java.io.IOException;
import java.lang.reflect.Field;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.ReflectionUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.edu.unisagrado.buscapet.dto.PostRequestDTO;
import com.edu.unisagrado.buscapet.dto.PostResponseDTO;
import com.edu.unisagrado.buscapet.model.Post;
import com.edu.unisagrado.buscapet.model.User;
import com.edu.unisagrado.buscapet.repository.PostRepository;
import com.edu.unisagrado.buscapet.repository.UserRepository;
import com.edu.unisagrado.buscapet.security.TokenService;
import com.edu.unisagrado.buscapet.service.PostService;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("post")
public class PostController {
	@Autowired
	private PostRepository postRepository;
	private final PostService postService;
	@Autowired
	private TokenService tokenService;
	@Autowired
	private UserRepository userRepository;
	private static String imagesDirectory = "files";

	@PostMapping
	public ResponseEntity<PostResponseDTO> savePost(@RequestParam("data") String data,
			@RequestParam("file") MultipartFile file, HttpServletRequest request) {

		try {
			// Converte a string JSON recebida em um objeto PostRequestDTO
			ObjectMapper objectMapper = new ObjectMapper();
			PostRequestDTO postRequestDTO = objectMapper.readValue(data, PostRequestDTO.class);

			var token = tokenService.recoverToken(request);
			var login = tokenService.validateToken(token);
			User user = userRepository.findByLogin(login);
			postRequestDTO.setUser(user);
			// Cria o objeto Post com os dados do DTO
			Post postData = new Post(postRequestDTO);

			// Salvar o post antes de armazenar a imagem
			postRepository.save(postData);

			// Salvar a imagem
			if (!file.isEmpty()) {
				byte[] bytes = file.getBytes();
				Path directory = Paths.get(imagesDirectory, file.getOriginalFilename());

				// Verifica se o diretório existe, se não, cria
				Files.createDirectories(directory.getParent());
				Files.write(directory, bytes);

				postData.setImageName(file.getOriginalFilename()); // Armazena o nome da imagem no postData
				postRepository.save(postData); // Salva o nome da imagem no BD, coluna image_name
			}

			PostResponseDTO responseDTO = new PostResponseDTO(postData);
			return ResponseEntity.ok(responseDTO);

		} catch (IOException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

    @GetMapping
    public ResponseEntity<List<PostResponseDTO>> getPosts(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String status) {

        // Se os parâmetros não forem fornecidos, retorna todos os posts
        List<Post> posts;
        if (city == null && status == null) {
            posts = postRepository.findAll();
        } else {
            posts = postService.getPostsByFilters(city, status);
        }

        // Converte a lista de Post para PostResponseDTO
        List<PostResponseDTO> response = posts.stream()
                                              .map(PostResponseDTO::new)
                                              .collect(Collectors.toList());

        return ResponseEntity.ok(response);
    }

	@PatchMapping("/{idPost}")
	@Transactional // Executa todas as ações (update) em conjunto e atualizar todas as colunas
	public ResponseEntity updatePost(@PathVariable Long idPost, @RequestBody @Valid PostRequestDTO data) {
		Optional<Post> optionalPost = postRepository.findById(idPost);
		if (optionalPost.isPresent()) {
			Post postUpdate = optionalPost.get();

			if (data.getPetName() != null) postUpdate.setPetName(data.getPetName());
			if (data.getStatus() != null) postUpdate.setStatus(data.getStatus());
			if (data.getImageName() != null) postUpdate.setImageName(data.getImageName());
			if (data.getSpecies() != null) postUpdate.setSpecies(data.getSpecies());
			if (data.getDescription() != null) postUpdate.setDescription(data.getDescription());
			if (data.getCity() != null) postUpdate.setCity(data.getCity());
			if (data.getNeighborhood() != null) postUpdate.setNeighborhood(data.getNeighborhood());
			if (data.getState() != null) postUpdate.setState(data.getState());

			PostResponseDTO responseDTO = new PostResponseDTO(postUpdate);
			return ResponseEntity.ok(responseDTO);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/{idPost}")
	public ResponseEntity deletePost(@PathVariable Long idPost) {
		postRepository.deleteById(idPost);
		return ResponseEntity.noContent().build();
	}
}

package com.edu.unisagrado.buscapet.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.edu.unisagrado.buscapet.dto.PostRequestDTO;
import com.edu.unisagrado.buscapet.dto.PostResponseDTO;
import com.edu.unisagrado.buscapet.model.Post;
import com.edu.unisagrado.buscapet.repository.PostRepository;
import com.edu.unisagrado.buscapet.service.PostService;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("post")
public class PostController {

	@Autowired
	private PostRepository postRepository;
	private final PostService postService;
	private static String imagesDirectory = "C:\\github\\buscapet\\files";

	@PostMapping
	public ResponseEntity<PostResponseDTO> savePost(
	        @RequestParam("data") String data, 
	        @RequestParam("file") MultipartFile file) {

	    try {
	        // Converte a string JSON recebida em um objeto PostRequestDTO
	        ObjectMapper objectMapper = new ObjectMapper();
	        PostRequestDTO postRequestDTO = objectMapper.readValue(data, PostRequestDTO.class);
	        
	        // Cria o objeto Post com os dados do DTO
	        Post postData = new Post(postRequestDTO);
	        
	        //Salvar o post antes de armazenar a imagem
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

	@GetMapping("/")
	public List<PostResponseDTO> getAll() {

		List<PostResponseDTO> postList = postRepository.findAll().stream().map(PostResponseDTO::new)
				.collect(Collectors.toList());
		return postList;

	}

	@GetMapping
	public ResponseEntity<List<Post>> getPostsByFilters(@RequestParam(required = false) String city,
			@RequestParam(required = false) String status) {
		List<Post> posts = postService.getPostsByFilters(city, status);
		return ResponseEntity.ok(posts);
	}

	@PutMapping
	@Transactional // Para executar todos as ações (update) em conjunto e atualizar todas as colunas
	public ResponseEntity updatePost(@RequestBody @Valid PostRequestDTO data) {
		Optional<Post> optionalPost = postRepository.findById(data.idPost());
		if (optionalPost.isPresent()) {
			Post postUpdate = optionalPost.get();
			postUpdate.setPetName(data.petName());
			postUpdate.setStatus(data.status());
			postUpdate.setImageName(data.imageName());
			postUpdate.setSpecies(data.species());
			postUpdate.setDescription(data.description());
			postUpdate.setCity(data.city());
			postUpdate.setStreet(data.street());
			postUpdate.setNeighborhood(data.neighborhood());
			postUpdate.setState(data.state());
			return ResponseEntity.ok(postUpdate);
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
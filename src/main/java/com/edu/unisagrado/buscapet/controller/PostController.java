package com.edu.unisagrado.buscapet.controller;
import org.springframework.beans.factory.annotation.Value;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.domain.JpaSort.Path;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

//import com.edu.unisagrado.buscapet.dto.AddressRequestDTO;
import com.edu.unisagrado.buscapet.dto.PostRequestDTO;
import com.edu.unisagrado.buscapet.dto.PostResponseDTO;
import com.edu.unisagrado.buscapet.model.Post;
import com.edu.unisagrado.buscapet.repository.PostRepository;
//import com.edu.unisagrado.buscapet.service.AddressService;
import com.edu.unisagrado.buscapet.service.PostService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
//import lombok.Value;

@RequiredArgsConstructor
@RestController
@RequestMapping("posts") // Quando o front chamar o endpoint "post", irá cair nessa classe
public class PostController {

	@Autowired
	private PostRepository postRepository;
    private final PostService postService;
//	private final AddressService addressService;

	@PostMapping
	public ResponseEntity savePost(@RequestBody @Valid PostRequestDTO data) { // Indica o que precisa ser injetado no body da request, resquestDTO é a classe que indica o que chega da requisição

		Post postData = new Post(data);
		postRepository.save(postData);
		return ResponseEntity.ok().build();

	}

	@GetMapping("/")
	public List<PostResponseDTO> getAll() {

		List<PostResponseDTO> postList = postRepository.findAll().stream().map(PostResponseDTO::new)
				.collect(Collectors.toList());
		return postList;

	}
	
    @GetMapping
    public ResponseEntity<List<Post>> getPostsByFilters(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String status) {
        List<Post> posts = postService.getPostsByFilters(city, status);
        return ResponseEntity.ok(posts);
    }

//	@GetMapping("/endereco")
//	public ResponseEntity addressSearch(@RequestBody AddressRequestDTO addressRequest) {
//		return ResponseEntity.ok(addressService.execute(addressRequest));
//	}

	@PutMapping
	@Transactional // Para executar todos as ações (update) em conjunto e atualizar todas as colunas
	public ResponseEntity updatePost(@RequestBody @Valid PostRequestDTO data) {
		Optional<Post> optionalPost = postRepository.findById(data.idPost());
		if (optionalPost.isPresent()) {
			Post postUpdate = optionalPost.get();
			postUpdate.setPetName(data.petName());
			postUpdate.setStatus(data.status());
			postUpdate.setImage(data.image());
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
	
// Upload e exibição das imagens usando a biblioteca Multipartfile e java.nio.file
	
    @Value("${file.upload-dir:C:/github/busca-pet/files}")
    private String uploadDir;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return new ResponseEntity<>("Arquivo vazio", HttpStatus.BAD_REQUEST);
        }

        try {
            // Cria o diretório se não existir
            File dir = new File(uploadDir);
            if (!dir.exists()) dir.mkdirs();

            // Salva a imagem
            Path path = Paths.get(uploadDir, file.getOriginalFilename());
            Files.write(path, file.getBytes());

            return new ResponseEntity<>("Imagem enviada com sucesso: " + file.getOriginalFilename(), HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>("Erro ao enviar a imagem: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Erro inesperado: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

 //Para exibir a imagem enviar requisição GET para http://localhost:8080/posts/images/nomeDoArquivoEnviado
    @GetMapping("/images/{filename:.+}")
    public ResponseEntity<byte[]> getImage(@PathVariable String filename) {
        try {
            Path path = Paths.get(uploadDir, filename); 
            byte[] image = Files.readAllBytes(path);
            
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(image);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}

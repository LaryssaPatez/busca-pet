package com.edu.unisagrado.buscapet.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.edu.unisagrado.buscapet.dto.AddressRequestDTO;
import com.edu.unisagrado.buscapet.dto.PostRequestDTO;
import com.edu.unisagrado.buscapet.dto.PostResponseDTO;
import com.edu.unisagrado.buscapet.model.Post;
import com.edu.unisagrado.buscapet.repository.PostRepository;
//import com.edu.unisagrado.buscapet.service.AddressService;
import com.edu.unisagrado.buscapet.service.PostService;
import com.edu.unisagrado.buscapet.service.PostService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("post") // Quando o front chamar o endpoint "post", irá cair nessa classe
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

	@GetMapping
	public List<PostResponseDTO> getAll() {

		List<PostResponseDTO> postList = postRepository.findAll().stream().map(PostResponseDTO::new)
				.collect(Collectors.toList());
		return postList;

	}

	@GetMapping("/cidade/{city}")
	public ResponseEntity<List<Post>> getPostsByCity(@PathVariable String city) {
		List<Post> posts = postService.getPostsByCity(city);
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

}

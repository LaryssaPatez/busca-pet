package com.edu.unisagrado.buscapet.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.apache.catalina.startup.ClassLoaderFactory.Repository;
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

import com.edu.unisagrado.buscapet.dto.PostResponseDTO;
import com.edu.unisagrado.buscapet.model.PostEntity;
import com.edu.unisagrado.buscapet.repository.PostRepository;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("post") //Quando o front chamar o endpoint "post", irá cair nessa classe
public class PostController {
	
	@Autowired
	private PostRepository postRepository;
	
	//@CrossOrigin(origins = "*", allowedHeaders = "*") 
	@PostMapping
	public ResponseEntity savePost(@RequestBody @Valid PostRequestDTO data) { //Indica o que precisa ser injetado no body da request, resquestDTO é a classe que indica o que chega da requisição
        PostEntity postData = new PostEntity(data);
        postRepository.save(postData);
		return ResponseEntity.ok().build();
		
	}
	
	//@CrossOrigin(origins = "*", allowedHeaders = "*") 
	@GetMapping
	public List<PostResponseDTO> getAll(){
		
		List<PostResponseDTO> postList = postRepository.findAll().stream().map(PostResponseDTO::new).collect(Collectors.toList());
		return postList;
		
	}	
	
	@PutMapping
	@Transactional //Para executar todos as ações (update) em conjunto e atualizar todas as colunas
	public ResponseEntity updatePost(@RequestBody @Valid PostRequestDTO data) {
		Optional <PostEntity> optionalPost = postRepository.findById(data.idPost());
		if (optionalPost.isPresent()) {
            PostEntity postUpdate = optionalPost.get();
    		postUpdate.setPetName(data.petName());
    		postUpdate.setStatus(data.status());
    		postUpdate.setImage(data.image());
    		postUpdate.setSpecies(data.species());
    		postUpdate.setDescription(data.description());
    		postUpdate.setCity(data.city());
    		postUpdate.setDistrict(data.district());
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

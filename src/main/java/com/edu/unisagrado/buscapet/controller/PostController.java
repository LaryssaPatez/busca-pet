package com.edu.unisagrado.buscapet.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edu.unisagrado.buscapet.dto.PostResponseDTO;
import com.edu.unisagrado.buscapet.model.PostEntity;
import com.edu.unisagrado.buscapet.repository.PostRepository;

@RestController
@RequestMapping("post") //Quando o front chamar o endpoint "post", irá cair nessa classe
public class PostController {
	
	@Autowired
	private PostRepository postRepository;
	
	//Create
	//@CrossOrigin(origins = "*", allowedHeaders = "*") 
	@PostMapping
	public void savePostPet(@RequestBody PostRequestDTO data) { //Indica o que precisa ser injetado no body da request, resquestDTO é a classe que indica o que chega da requisição
        PostEntity postData = new PostEntity(data);
        postRepository.save(postData);
		return;
		
	}
	
	//Read
	//@CrossOrigin(origins = "*", allowedHeaders = "*") 
	@GetMapping
	public List<PostResponseDTO> getAll(){
		
		List<PostResponseDTO> postPetList = postRepository.findAll().stream().map(PostResponseDTO::new).collect(Collectors.toList());
		return postPetList;
		
	}
	
	
}

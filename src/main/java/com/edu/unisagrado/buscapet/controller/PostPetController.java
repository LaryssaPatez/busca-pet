package com.edu.unisagrado.buscapet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edu.unisagrado.buscapet.model.PostPetEntity;
import com.edu.unisagrado.buscapet.repository.PostPetRepository;

@RestController
@RequestMapping("Post") //Quando o front chamar o endpoint "register", irá cair nessa classe
public class PostPetController {
	
	@Autowired
	private PostPetRepository postPetRepository;

	@GetMapping
	public List<PostPetEntity> getAll() {
		
		List<PostPetEntity> postPetList = postPetRepository.findAll();
		return postPetList;
	}
}

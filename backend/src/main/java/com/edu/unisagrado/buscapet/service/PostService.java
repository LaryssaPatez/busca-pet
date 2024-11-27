package com.edu.unisagrado.buscapet.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.edu.unisagrado.buscapet.model.Post;
import com.edu.unisagrado.buscapet.repository.PostRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {

	private final PostRepository postRepository;

	public List<Post> getPostsByCity(String city) {
		return postRepository.findByCity(city); 
	}

	public List<Post> getPostsByFilters(String city, String status) {
		if (city != null && status != null) {
			return postRepository.findByCityAndStatus(city, status);
		} else if (city != null) {
			return postRepository.findByCity(city);
		} else if (status != null) {
			return postRepository.findByStatus(status);
		}
		return postRepository.findAll();
	}
}

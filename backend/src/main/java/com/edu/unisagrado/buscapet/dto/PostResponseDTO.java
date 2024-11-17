package com.edu.unisagrado.buscapet.dto;

import com.edu.unisagrado.buscapet.model.Post;

//O que o servidor irá retornar
public record PostResponseDTO(

		Long idPost, 
		String petName,
		String species, 
		String description,
		String imageName,
		String state, 
		String city, 
		String neighborhood, 
		String street,
		String status) {

	public PostResponseDTO(Post post) {
		this(post.getIdPost(), 
				post.getPetName(), 
				post.getSpecies(),
				post.getDescription(),
				post.getImageName(),
				post.getState(), 
				post.getCity(),
				post.getNeighborhood(), 
				post.getStreet(), 
				post.getStatus());
	}
}
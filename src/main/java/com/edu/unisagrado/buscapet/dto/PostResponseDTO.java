package com.edu.unisagrado.buscapet.dto;

import com.edu.unisagrado.buscapet.model.Post;

//O que o servidor irá retornar
public record PostResponseDTO(

		Long idPost, String petName, String image, String species, String description,
//		String cep,
		String state, 
		String city, 
		String neighborhood, 
		String street,
		Boolean status) {

	public PostResponseDTO(Post post) {
		this(post.getIdPost(), 
				post.getPetName(), 
				post.getImage(), 
				post.getSpecies(),
				post.getDescription(), 
//				postEntity.getCep(), 
				post.getState(), 
				post.getCity(),
				post.getNeighborhood(), 
				post.getStreet(), 
				post.getStatus());
	}
}
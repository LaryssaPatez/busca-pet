package com.edu.unisagrado.buscapet.dto;

import com.edu.unisagrado.buscapet.model.PostEntity;

//O que o servidor irá retornar
public record PostResponseDTO(

		Long idPost, String petName, String image, String species, String description,
//		String cep,
		String state, 
		String city, 
		String neighborhood, 
		String street,
		Boolean status) {

	public PostResponseDTO(PostEntity postEntity) {
		this(postEntity.getIdPost(), 
				postEntity.getPetName(), 
				postEntity.getImage(), 
				postEntity.getSpecies(),
				postEntity.getDescription(), 
//				postEntity.getCep(), 
				postEntity.getState(), 
				postEntity.getCity(),
				postEntity.getNeighborhood(), 
				postEntity.getStreet(), 
				postEntity.getStatus());
	}
}
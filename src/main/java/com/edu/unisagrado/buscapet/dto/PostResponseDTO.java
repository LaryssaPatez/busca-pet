package com.edu.unisagrado.buscapet.dto;

import com.edu.unisagrado.buscapet.model.PostEntity;

//O que o servidor irá gerar
public record PostResponseDTO(
		
		Long idPost, 
		String petName, 
		String image, 
		String species,
		String description, 
		String state, 
		String city, 
		String district, 
		String reference, 
		Boolean status) {
	
	public PostResponseDTO(PostEntity postEntity) {
		this(postEntity.getIdPost(), postEntity.getPetName(), postEntity.getImage(), postEntity.getSpecies(), postEntity.getDescription(), postEntity.getState(), postEntity.getCity(), postEntity.getDistrict(), postEntity.getReference(), postEntity.getStatus());
	}
}
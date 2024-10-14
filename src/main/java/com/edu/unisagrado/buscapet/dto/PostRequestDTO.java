package com.edu.unisagrado.buscapet.dto;

import jakarta.validation.constraints.NotNull;

//O que o usuário irá enviar na requisição
public record PostRequestDTO(
		
		Long idPost,
		@NotNull
		String petName, 
		String image, 
		String species,
		String description, 
//		String cep,
		String state, 
		String city, 
		String neighborhood, 
		String street,
		Boolean status) {

}

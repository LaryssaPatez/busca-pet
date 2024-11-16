package com.edu.unisagrado.buscapet.dto;

import jakarta.validation.constraints.NotNull;

//O que o usuário irá enviar na requisição
public record PostRequestDTO(
		
		Long idPost,
		String petName, 
//		String imageName, 
		String species,
		String description,
		String imageName,
//		String cep,
		String state, 
		String city, 
		String neighborhood, 
		String street,
		String status) {

}

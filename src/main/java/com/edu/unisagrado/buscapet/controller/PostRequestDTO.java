package com.edu.unisagrado.buscapet.controller;

import jakarta.validation.constraints.NotNull;

//O que o usuário irá enviar na requisição
public record PostRequestDTO(
		
		Long idPost,
		@NotNull
		String petName, 
		String image, 
		String species,
		String description, 
		String state, 
		String city,
		String district, 
		String reference, 
		Boolean status) {

}

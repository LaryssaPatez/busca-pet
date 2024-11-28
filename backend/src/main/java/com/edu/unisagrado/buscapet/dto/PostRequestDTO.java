package com.edu.unisagrado.buscapet.dto;

import com.edu.unisagrado.buscapet.model.User;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

//O que o usuário irá enviar na requisição
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PostRequestDTO {
		
		private Long idPost;
		private User user;
		private String petName;
		private String species;
		private String description;
		private String imageName;
		private String state;
		private String city;
		private String neighborhood; 
		private String street;
		private String status;

}

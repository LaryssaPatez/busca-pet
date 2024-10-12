package com.edu.unisagrado.buscapet.dto;

import com.edu.unisagrado.buscapet.model.PostEntity;

//O que o servidor irá gerar
public record PostResponseDTO(Long idPost) {
	
	public PostResponseDTO(PostEntity postEntity) {
		this(postEntity.getIdPost());
	}
}
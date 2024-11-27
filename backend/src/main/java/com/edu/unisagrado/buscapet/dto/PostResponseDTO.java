package com.edu.unisagrado.buscapet.dto;

import com.edu.unisagrado.buscapet.model.Post;

import lombok.Getter;
import lombok.Setter;

//O que o servidor irá retornar
@Getter
@Setter
public class PostResponseDTO {

		private Long idPost;
		private String userName;
		private String petName;
		private String species; 
		private String description;
		private String imageName;
		private String state;
		private String city;
		private String neighborhood;
		private String status;

	public PostResponseDTO(Post post) {
		this.idPost = post.getIdPost();
        this.petName = post.getPetName();
        this.species = post.getSpecies();
        this.description = post.getDescription();
        this.imageName = post.getImageName();
        this.status = post.getStatus();
        this.state = post.getState();
        this.city = post.getCity();
        this.neighborhood = post.getNeighborhood();
        this.userName = post.getUser().getUsername();
    }
}
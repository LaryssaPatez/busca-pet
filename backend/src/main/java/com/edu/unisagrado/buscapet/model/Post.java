package com.edu.unisagrado.buscapet.model;

import com.edu.unisagrado.buscapet.dto.PostRequestDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


//Irá representar a tabela no banco de dados
@Table(name = "Post_Pet")
@Entity(name = "Post_Pet")
@Getter 
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "idPost")
public class Post {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPost;
	@ManyToOne
	private User user;
	private String species; 
	private String petName;
	private String imageName;
	private String description;
	private String status; 

	//Endereço
	private String state;
	private String city;
	private String neighborhood;

	public Post(PostRequestDTO data) {
		this.user = data.getUser();
		this.petName = data.getPetName();
		this.imageName = data.getImageName();
		this.species = data.getSpecies();
		this.city = data.getCity();
		this.neighborhood = data.getNeighborhood();
		this.description = data.getDescription();
		this.state = data.getState();
		this.status = data.getStatus();

	}
	
}

package com.edu.unisagrado.buscapet.model;

import com.edu.unisagrado.buscapet.dto.PostRequestDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


//Irá representar a tabela no banco de dados
@Table(name = "Post_Pet")
@Entity(name = "Post_Pet")

//lombok
@Getter //Lombok irá gerar todos os métodos de getters e setters
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "idPost")
public class Post {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPost;
	private String species; //Frontend colocar opções de especies: cachorro, gato, coelho etc..
	private String petName;
	private String imageName;
	private String description;
	private String status; //Frontend colocar apenas duas opções: Perdido ou encontrado

	//Endereço
//	private String cep;
	private String state;
	private String city;
	private String neighborhood;
	private String street;

	public Post(PostRequestDTO data) {
		this.petName = data.petName();
		this.imageName = data.imageName();
		this.city = data.city();
		this.neighborhood = data.neighborhood();
		this.description = data.description();
//		this.cep = data.cep();
		this.street = data.street();
		this.state = data.state();
		this.status = data.status();

	}
	
}

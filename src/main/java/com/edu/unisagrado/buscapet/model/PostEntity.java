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
public class PostEntity {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPost;
	private String species; //Será um enum com opções
	private String petName;
	private String image;
	private String description;
	private Boolean status;

	//Endereço
//	private String cep;
//	private String state;
//	private String city;
//	private String district;
//	private String reference;

	public PostEntity(PostRequestDTO data) {
		this.petName = data.petName();
		this.image = data.image();
//		this.city = data.city();
//		this.district = data.district();
//		this.description = data.description();
//		this.cep = data.cep();
//		this.reference = data.reference();
//		this.state = data.state();
		this.status = data.status();

	}
	
}

package com.edu.unisagrado.buscapet.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


//Irá representar a tabela no banco de dados
@Table(name = "Post_Pet")
@Entity(name = "Post_Pet")
public class PostPetEntity {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPost;
	private String species; //Será um enum com opções
	private String petName;
	private String image;
	private String description;
	
	//Endereço
	private String state;
	private String city;
	private String district;
	private String reference;
	private Boolean status;
	
}

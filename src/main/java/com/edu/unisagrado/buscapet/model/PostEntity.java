package com.edu.unisagrado.buscapet.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;


//Irá representar a tabela no banco de dados
@Table(name = "Post_Pet")
@Entity(name = "Post_Pet")

//lombok
@Getter //Lombok irá gerar todos os métodos de getters e setters
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "idPost")
public class PostEntity {
	
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
	
//	public String getSpecies() {
//		return species;
//	}
//	public void setSpecies(String species) {
//		this.species = species;
//	}
//	public String getPetName() {
//		return petName;
//	}
//	public void setPetName(String petName) {
//		this.petName = petName;
//	}
//	public String getImage() {
//		return image;
//	}
//	public void setImage(String image) {
//		this.image = image;
//	}
//	public String getDescription() {
//		return description;
//	}
//	public void setDescription(String description) {
//		this.description = description;
//	}
//	public String getState() {
//		return state;
//	}
//	public void setState(String state) {
//		this.state = state;
//	}
//	public String getCity() {
//		return city;
//	}
//	public void setCity(String city) {
//		this.city = city;
//	}
//	public String getDistrict() {
//		return district;
//	}
//	public void setDistrict(String district) {
//		this.district = district;
//	}
//	public String getReference() {
//		return reference;
//	}
//	public void setReference(String reference) {
//		this.reference = reference;
//	}
//	public Boolean getStatus() {
//		return status;
//	}
//	public void setStatus(Boolean status) {
//		this.status = status;
//	}
//	public Long getIdPost() {
//		return idPost;
//	}
	
}

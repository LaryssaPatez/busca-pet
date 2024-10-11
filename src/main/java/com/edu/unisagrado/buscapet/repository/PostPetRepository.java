package com.edu.unisagrado.buscapet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edu.unisagrado.buscapet.model.PostPetEntity;

//Irá pegar os registros do BD
public interface PostPetRepository extends JpaRepository<PostPetEntity, Long> {
	
}

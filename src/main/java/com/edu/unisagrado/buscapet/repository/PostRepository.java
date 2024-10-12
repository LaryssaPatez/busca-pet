package com.edu.unisagrado.buscapet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edu.unisagrado.buscapet.model.PostEntity;

//Irá pegar os registros do BD
public interface PostRepository extends JpaRepository<PostEntity, Long> {
	
}

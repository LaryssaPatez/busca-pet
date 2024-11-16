package com.edu.unisagrado.buscapet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edu.unisagrado.buscapet.model.Post;

//Irá pegar os registros do BD
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByCity(String city);
    List<Post> findByCityAndStatus(String city, String status);
    List<Post> findByStatus(String status);
}

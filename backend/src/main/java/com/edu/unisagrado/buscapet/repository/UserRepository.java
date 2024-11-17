package com.edu.unisagrado.buscapet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.edu.unisagrado.buscapet.model.User;

public interface UserRepository extends JpaRepository<User, String> {
	UserDetails findByLogin(String login);
	
}

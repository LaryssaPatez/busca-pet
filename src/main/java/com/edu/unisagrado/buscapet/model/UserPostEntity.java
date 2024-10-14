package com.edu.unisagrado.buscapet.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "User_Posts")
@Entity(name = "User_Posts")
public class UserPostEntity {

		@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long postId;
		private Long userId;
		private String postName;
		private Boolean status;
		
		
}

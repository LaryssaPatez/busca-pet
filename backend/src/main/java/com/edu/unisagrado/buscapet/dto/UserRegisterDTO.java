package com.edu.unisagrado.buscapet.dto;

import com.edu.unisagrado.buscapet.model.UserRole;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegisterDTO {
	
	private String login;
	private String password;
	private UserRole role;
}

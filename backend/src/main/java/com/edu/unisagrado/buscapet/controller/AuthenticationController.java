package com.edu.unisagrado.buscapet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edu.unisagrado.buscapet.dto.UserAuthenticationDTO;
import com.edu.unisagrado.buscapet.dto.UserLoginResponseDTO;
import com.edu.unisagrado.buscapet.dto.UserRegisterDTO;
import com.edu.unisagrado.buscapet.model.User;
import com.edu.unisagrado.buscapet.repository.UserRepository;
import com.edu.unisagrado.buscapet.security.TokenService;

@RestController
@RequestMapping("auth")
public class AuthenticationController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private TokenService tokenService;

	@PostMapping("/login")
	public ResponseEntity login(@RequestBody @Valid UserAuthenticationDTO data) {
		var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
		var auth = this.authenticationManager.authenticate(usernamePassword);
		var token = tokenService.generateToken((User)auth.getPrincipal());
		
		return ResponseEntity.ok(new UserLoginResponseDTO(token));
	}
	
	@PostMapping("/cadastro")
	public ResponseEntity register(@RequestBody @Valid UserRegisterDTO data) {
		if(this.repository.findByLogin(data.getLogin()) != null) return ResponseEntity.badRequest().build();
		
		String encryptedPassword = new BCryptPasswordEncoder().encode(data.getPassword());
		User newUser = new User(data.getLogin(), encryptedPassword, data.getRole());
		
		this.repository.save(newUser);
		
		return ResponseEntity.ok().build();
	}
	
}

package com.edu.unisagrado.buscapet.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//Irá representar as CRUDS
@RestController
@RequestMapping("cadastrar") //Quando o front chamar o endpoint "cadastrar", irá cair nessa classe
public class UserController {
	
	//Se o método da requisição for GET, então:
	@GetMapping
	public void getAll() {
		
	}
	

}

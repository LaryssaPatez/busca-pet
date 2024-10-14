package com.edu.unisagrado.buscapet.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@AllArgsConstructor
public class AddressResponseDTO {
	
	private String cep;
	private String street;
	private String neighborhoods;
	private String state;
	
}

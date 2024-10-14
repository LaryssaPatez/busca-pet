package com.edu.unisagrado.buscapet.service;


import org.springframework.stereotype.Service;

import com.edu.unisagrado.buscapet.dto.AddressRequestDTO;
import com.edu.unisagrado.buscapet.dto.AddressResponseDTO;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class AddressService {

	private final AddressFeign addressFeign;
	
	public AddressResponseDTO execute(AddressRequestDTO addressRequest) {
		return addressFeign.addressSearchCep(addressRequest.getCep());
	}
	
}

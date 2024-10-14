package com.edu.unisagrado.buscapet.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.edu.unisagrado.buscapet.dto.AddressResponseDTO;

@FeignClient(url = "https://viacep.com.br/ws/", name = "viacep")
public interface AddressFeign {
	
	@GetMapping("{cep}/json")
	AddressResponseDTO addressSearchCep(@PathVariable("cep") String cep);
}

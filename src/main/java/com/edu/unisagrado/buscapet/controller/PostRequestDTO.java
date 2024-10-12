package com.edu.unisagrado.buscapet.controller;

public record PostRequestDTO(String petName, String image, String description, String state, String city, String district, String reference, Boolean status){

}

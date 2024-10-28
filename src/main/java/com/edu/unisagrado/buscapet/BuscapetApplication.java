package com.edu.unisagrado.buscapet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.cloud.openfeign.EnableFeignClients;

//@EnableFeignClients(basePackages = "com.edu.unisagrado.buscapet.service")
@SpringBootApplication(exclude={SecurityAutoConfiguration.class})	
public class BuscapetApplication {

	public static void main(String[] args) {
		SpringApplication.run(BuscapetApplication.class, args);
	}

}

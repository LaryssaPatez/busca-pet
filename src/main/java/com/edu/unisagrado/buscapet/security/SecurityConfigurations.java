package com.edu.unisagrado.buscapet.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
//Redefinindo configurações padrões do Spring Security
public class SecurityConfigurations { 
	
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
		return httpSecurity
				.csrf(csrf -> csrf.disable())
				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authorizeHttpRequests(authorize -> authorize
						//Qualquer pessoa pode fazer requisição a esses endpoints
						.requestMatchers(HttpMethod.POST, "/auth/login").permitAll() 
						.requestMatchers(HttpMethod.POST, "/auth/cadastro").permitAll() 
						.requestMatchers(HttpMethod.GET, "/post").permitAll() 
	
						//Somente usuários podem fazer requisições a esses endpoints
						.requestMatchers(HttpMethod.POST, "/post").hasRole("USER") 
						.requestMatchers(HttpMethod.PUT, "/post").hasRole("USER") 
						.anyRequest().authenticated() //Demais requisições só precisa estar autenticado
						
						//Somente ADMIN podem fazer requisições a esses endpoints
						.requestMatchers(HttpMethod.DELETE, "/post").hasRole("ADMIN") 
				)
				.build();
	}
	
	@Bean
	AuthenticationManager autheticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}
	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}

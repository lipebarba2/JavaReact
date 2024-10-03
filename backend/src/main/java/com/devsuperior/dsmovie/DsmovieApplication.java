package com.devsuperior.dsmovie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.devsuperior.dsmovie.entities")
public class  DsmovieApplication {

	public static void main(String[] args) {
		SpringApplication.run(DsmovieApplication.class, args);
	}

}

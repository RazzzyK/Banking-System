package com.example.apidemo.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        System.out.println("CORS configuration is being applied.");

        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000") // Add your frontend origin(s) here
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow the HTTP methods used by your application
                .allowedHeaders("*"); // Allow all headers
    }
}

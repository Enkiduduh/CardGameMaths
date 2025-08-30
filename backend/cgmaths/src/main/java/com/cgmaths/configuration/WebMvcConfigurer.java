package com.cgmaths.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;


@Configuration
public class WebMvcConfigurer {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
//            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // autorise toutes les routes de ton API
                        .allowedOrigins("http://localhost:5173") // ton front Vite
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true); // si tu utilises cookies/session
            }
        };
    }

}

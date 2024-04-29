package com.example.gift.config;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class SwaggerConfig {

    private final String name = "Guru";
    private final String email = "charanmenaka@gmail.com";
    private final String url = "https://github.com/GuruCharan27";  

    @Bean
    public OpenAPI openAPI(){
        return new OpenAPI().info(new Info()
                        .title("Ferns N Petals")
                        .description("FNP is the customized gift app")
                        .version("1.0.0")
                        .contact(new Contact()
                             .name(name)
                             .email(email)
                             .url(url))
                        .license(new License()
                              .name("Apache 2.O")
                              .url("https://apache.org/licenses/LICENSE-2.0.html")))
                        .servers(List.of(new Server().url("http://localhost:8181")))
                        .addSecurityItem(new SecurityRequirement().addList("bearerAuth"))
                        .components(new Components()
                               .addSecuritySchemes("bearerAuth", new SecurityScheme()
                                                                    .name("Auth")
                                                                    .type(SecurityScheme.Type.HTTP)
                                                                    .scheme("bearer")
                                                                    .description("Provide a json web token.")
                                                                    .bearerFormat("JWT")));
    }
}

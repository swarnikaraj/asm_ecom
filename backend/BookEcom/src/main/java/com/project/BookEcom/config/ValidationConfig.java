package com.project.BookEcom.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.mapping.event.ValidatingMongoEventListener;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

@Configuration
public class ValidationConfig {
	
	@Bean
	public ValidatingMongoEventListener validatingMongoEventListener() {
		ValidatingMongoEventListener val = new ValidatingMongoEventListener(validator());
		return val;
	}
	
	@Bean
	public LocalValidatorFactoryBean validator(){
		return new LocalValidatorFactoryBean();
	}
}

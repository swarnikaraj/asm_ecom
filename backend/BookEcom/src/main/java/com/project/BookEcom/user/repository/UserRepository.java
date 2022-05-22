package com.project.BookEcom.user.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.BookEcom.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
	
}

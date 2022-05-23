package com.project.BookEcom.user.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.BookEcom.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

	
	Optional<User> findByUserName(String userName);
	
	@Query("{'userId':?0}")
	User findByUserId(String Id); 
	
}

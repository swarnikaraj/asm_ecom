package com.project.BookEcom.user.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.BookEcom.model.UserModel;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {
	
	UserModel findByUserName(String userName);
	
	@Query("{'userId':?0}")
	UserModel findByUserId(String Id); 
	
}

package com.project.BookEcom.service;

import javax.validation.ConstraintViolationException;

import com.project.BookEcom.exception.UserCollectionException;
import com.project.BookEcom.model.User;

public interface UserService {

	public void createUser(User user) throws ConstraintViolationException, UserCollectionException;
	
	
}

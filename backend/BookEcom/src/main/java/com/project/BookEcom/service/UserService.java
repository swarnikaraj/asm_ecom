package com.project.BookEcom.service;

import java.util.List;

import javax.validation.ConstraintViolationException;

import com.project.BookEcom.exception.BookCollectionException;
import com.project.BookEcom.exception.UserCollectionException;
import com.project.BookEcom.model.Book;
import com.project.BookEcom.model.UserModel;


public interface UserService {

	public void createUser(UserModel user) throws ConstraintViolationException, UserCollectionException;
	
	public void addBookToCart(String bookId, String userId) throws UserCollectionException , BookCollectionException;
	
	public void deleteBookFromCart(String bookId, String userId);
	
	public List<Book> showCart(String userId) throws UserCollectionException;

	public List<UserModel> getAllUsers();

	public void checkout(String userid);

	public List<Book> myOrders(String userid);
	
}

package com.project.BookEcom.service;

import java.util.List;

import javax.validation.ConstraintViolationException;

import com.project.BookEcom.exception.UserCollectionException;
import com.project.BookEcom.model.Book;
import com.project.BookEcom.model.User;


public interface UserService {

	public void createUser(User user) throws ConstraintViolationException, UserCollectionException;
	
	public void addBookToCart(Book book, String userId) throws UserCollectionException;
	
	public void deleteBookFromCart(String bookId, String userId);
	
	public List<Book> showCart(String userId) throws UserCollectionException;

	public List<User> getAllUsers();
	
}

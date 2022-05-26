package com.project.BookEcom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.BookEcom.exception.UserCollectionException;
import com.project.BookEcom.model.Book;
import com.project.BookEcom.model.User;
import com.project.BookEcom.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	// @PostMapping("/addUsers")
	// public ResponseEntity<?> allUsers() {
	// 	List<User> users = userService.getAllUsers();

	// 	return new ResponseEntity<>(users, users.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	// }
	
	@GetMapping("/allUsers")
	public ResponseEntity<?> allUsers() {
		List<User> users = userService.getAllUsers();

		return new ResponseEntity<>(users, users.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("/user/addToCart/{id}")
	public ResponseEntity<?> addToCart(@RequestBody Book book, @PathVariable String id){
		try {
			userService.addBookToCart(book, id);
			return new ResponseEntity<>("Succesfully added to cart "+ id , HttpStatus.OK);
		}catch (UserCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/user/cart/{id}")
	public ResponseEntity<?> viewCart(@PathVariable String id) throws UserCollectionException {
		try {
			List<Book> books = userService.showCart(id);
			return new ResponseEntity<>(books , HttpStatus.OK);
		}catch (UserCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
		
	}
	
	
	
	
	
}

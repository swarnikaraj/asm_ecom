package com.project.BookEcom.controller;

import java.util.List;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.BookEcom.exception.BookCollectionException;
import com.project.BookEcom.exception.UserCollectionException;
import com.project.BookEcom.model.Book;
import com.project.BookEcom.model.UserModel;
import com.project.BookEcom.service.UserService;

@RestController
@CrossOrigin(origins="*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/subscribe")
	private ResponseEntity<?> subscribeClient(@RequestBody UserModel user){
		String userName = user.getUserName();
		
		try {
			userService.createUser(user);
			return new ResponseEntity<>(user, HttpStatus.OK);
		} catch (ConstraintViolationException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
		}catch (UserCollectionException e) {
			return new ResponseEntity<>(e.getMessage()+ userName, HttpStatus.CONFLICT);
		}
	}
	
	@GetMapping("/allusers")
	public ResponseEntity<?> allUsers() {
		List<UserModel> users = userService.getAllUsers();

		return new ResponseEntity<>(users, users.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/user/addtocart/{userid}/{bookid}")
	public ResponseEntity<?> addToCart(@PathVariable String bookid, @PathVariable String userid){
		try {
			userService.addBookToCart(bookid, userid);
			return new ResponseEntity<>("Succesfully added to cart "+ userid , HttpStatus.OK);
		}catch (BookCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}catch (UserCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/user/cart/{userid}")
	public ResponseEntity<?> viewCart(@PathVariable String userid) throws UserCollectionException {
		try {
			List<Book> books = userService.showCart(userid);
			return new ResponseEntity<>(books , HttpStatus.OK);
		}catch (UserCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/user/deletecart/{userid}/{bookId}")
	public ResponseEntity<?> deleteBookCart(@PathVariable String userid,@PathVariable String bookId) {
		userService.deleteBookFromCart(bookId, userid);
		return new ResponseEntity<>("succesfully deleted" , HttpStatus.OK);
	}
	
	@GetMapping("/user/checkout/{userid}")
	public ResponseEntity<?> checkout(@PathVariable String userid) {
		userService.checkout(userid);
		return new ResponseEntity<>("succesfully deleted" , HttpStatus.OK);
	}
	
	@GetMapping("/user/myorders/{userid}")
	public ResponseEntity<?> myOrders(@PathVariable String userid) {
		List<Book> books = userService.myOrders(userid);
		return new ResponseEntity<>(books , HttpStatus.OK);
	}
	
}

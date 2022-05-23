package com.project.BookEcom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.BookEcom.model.User;
import com.project.BookEcom.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/allUsers")
	public ResponseEntity<?> getAllBooks() {
		List<User> users = userService.getAllUsers();

		return new ResponseEntity<>(users, users.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}
	
	
	
}

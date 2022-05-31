package com.project.BookEcom.model;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class UserModel {
	
	@Id
	private String userId;
	
	@NotNull(message= "username should be unique and must not be null")
	private String userName;
	
	@NotNull(message= "Password should be must not be null")
	private String password;
	
	private List<Book> booksInCart;
	
	private String role;
	
	private List<Book> myOrders;
	
	
	public UserModel() {
		this.booksInCart = new ArrayList<>();
		this.myOrders = new ArrayList<>();
		this.role = "User";
	}

	public UserModel(
			@NotNull(message = "username should be unique and must not be null") String userName,
			@NotNull(message = "Password should be must not be null") String password) {
	
		this.userName = userName;
		this.password = password;
		this.booksInCart = new ArrayList<>();
		this.myOrders = new ArrayList<>();
		this.role = "User";
	}
	

	public List<Book> getMyOrders() {
		return myOrders;
	}

	public void setMyOrders(List<Book> myOrders) {
		this.myOrders = myOrders;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public List<Book> getBooksInCart() {
		return booksInCart;
	}

	public void setBooksInCart(List<Book> issuedBooks) {
		this.booksInCart = issuedBooks;
	}
	
	
}

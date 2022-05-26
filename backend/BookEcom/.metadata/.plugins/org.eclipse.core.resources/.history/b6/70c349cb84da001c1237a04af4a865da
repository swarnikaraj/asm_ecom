package com.project.BookEcom.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
	
	@Id
	private String userId;
	
	private String userName;
	
	private String password;
	
	private List<Book> issuedBooks;

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

	public List<Book> getIssuedBooks() {
		return issuedBooks;
	}

	public void setIssuedBooks(List<Book> issuedBooks) {
		this.issuedBooks = issuedBooks;
	}
	
	
}

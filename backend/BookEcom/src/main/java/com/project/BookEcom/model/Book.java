package com.project.BookEcom.model;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "books")
public class Book {

	@Id
	private String bookId;

	@NotNull(message = "BookName cannot be null")
	private String bookName;

	@NotNull(message = "BookAuthorName cannot be null")
	private String bookAuthorName;
	
	@NotNull(message = "BookPrice cannot be empty")
	private String bookPrice;
	
	private String category;
	
	private String bookDescription;

	public String getCategory() {
		return category;
	}

	public void setCategories(String category) {
		this.category = category;
	}

	public String getBookId() {
		return bookId;
	}

	public void setBookId(String bookId) {
		this.bookId = bookId;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getBookAuthorName() {
		return bookAuthorName;
	}

	public void setBookAuthorName(String bookAuthorName) {
		this.bookAuthorName = bookAuthorName;
	}

	public String getBookPrice() {
		return bookPrice;
	}

	public void setBookPrice(String bookPrice) {
		this.bookPrice = bookPrice;
	}

	public String getBookDescription() {
		return bookDescription;
	}

	public void setBookDescription(String bookDescription) {
		this.bookDescription = bookDescription;
	}
	
	

}

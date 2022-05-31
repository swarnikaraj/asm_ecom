package com.project.BookEcom.exception;

public class BookCollectionException extends Exception {

	private static final long serialVersionUID = 1L;
	
	public BookCollectionException(String message) {
		super(message);
	}
	
	public static String NotFoundException(String id) {
		return "Book with "+id+" not found";
	}
	
	public static String CategoryNotFound(String cat) {
		return "No books of "+cat+ " category is available";
	}
	
	public static String AuthorNotFound(String authName) {
		return "No books of "+authName+ " is available";
	}
	
	public static String BookAlreadyExists(){
		return "Book with given name already exists";
	}
	
	public static String BookOutOfStock(){
		return "Book is out of stock";
	}

}

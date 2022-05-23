package com.project.BookEcom.service;

import java.util.List;

import javax.validation.ConstraintViolationException;

import com.project.BookEcom.exception.BookCollectionException;
import com.project.BookEcom.model.Book;

public interface BookService {

	public void createBook(Book book) throws ConstraintViolationException, BookCollectionException;

	public List<Book> getAllBooks();

	public Book getSingleBook(String id) throws BookCollectionException;

	public void deleteBookById(String id) throws BookCollectionException;

	public List<Book> getBooksByCat(String cat) throws BookCollectionException;

	List<Book> getBooksByAuthName(String authName) throws BookCollectionException;
}

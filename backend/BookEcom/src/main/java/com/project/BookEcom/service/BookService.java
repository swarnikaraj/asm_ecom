package com.project.BookEcom.service;

import java.util.List;

import javax.validation.ConstraintViolationException;

import org.springframework.data.domain.Page;

import com.project.BookEcom.exception.BookCollectionException;
import com.project.BookEcom.model.Book;

public interface BookService {

	public void createBook(Book book) throws ConstraintViolationException, BookCollectionException;

	public List<Book> getAllBooks();

	public Book getSingleBook(String id) throws BookCollectionException;

	public void deleteBookById(String id) throws BookCollectionException;

	public List<Book> getBooksByCat(String cat) throws BookCollectionException;

	List<Book> getBooksByAuthName(String authName) throws BookCollectionException;

//	public void updateRating(String id, int rating) throws BookCollectionException;
//
//	public void updatePrice(String id, int price) throws BookCollectionException;
//	
//	public void updateQuantity(String id, int quant) throws BookCollectionException;

	public List<Book> findBooksWithsorting(String field);

	Page<Book> findProductWithPagination(int OffSet, int pageSize);

	Page<Book> findProductWithPaginationAndSorting(int OffSet, int pageSize, String field);

	public void update(String id, Book book) throws BookCollectionException;

	public List<Book> searchBook(String searchWord) throws BookCollectionException;
}

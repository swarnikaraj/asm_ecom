package com.project.BookEcom.controller;

import java.util.List;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.BookEcom.exception.BookCollectionException;
import com.project.BookEcom.model.Book;
import com.project.BookEcom.service.BookService;


@RestController
public class BookController {

	@Autowired
	private BookService bookService;

	@GetMapping("/allBooks")
	public ResponseEntity<?> getAllBooks() {
		List<Book> books = bookService.getAllBooks();

		return new ResponseEntity<>(books, books.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@PostMapping("/addBook")
	public ResponseEntity<?> addBook(@RequestBody Book book) throws BookCollectionException {
		try {
			bookService.createBook(book);
			return new ResponseEntity<Book>(book, HttpStatus.OK);
		} catch (ConstraintViolationException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
		} catch (BookCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
		}
	}

	@GetMapping("/book/{id}")
	public ResponseEntity<?> getSingleBook(@PathVariable String id) throws BookCollectionException {
		try {
			return new ResponseEntity<>(bookService.getSingleBook(id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/books/{cat}")
	public ResponseEntity<?> getBooksByCategory(@PathVariable String cat) throws BookCollectionException {
		try {
			List<Book> books = bookService.getBooksByCat(cat);	
			return new ResponseEntity<>(books, HttpStatus.OK);
		}catch(BookCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/book/{id}")
	public ResponseEntity<?> deleteById(@PathVariable String id) {
		try {
			bookService.deleteBookById(id);
			return new ResponseEntity<>("Succcesfully deleted with id " + id, HttpStatus.OK);
		} catch (BookCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

}

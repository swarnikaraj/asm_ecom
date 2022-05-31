package com.project.BookEcom.controller;

import java.util.List;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.BookEcom.exception.BookCollectionException;
import com.project.BookEcom.model.Book;
import com.project.BookEcom.service.BookService;

@RestController
@CrossOrigin(origins="*")
public class BookController {

	@Autowired
	private BookService bookService;

	@GetMapping("/allbooks")
	public ResponseEntity<?> getAllBooks() {
		List<Book> books = bookService.getAllBooks();

		return new ResponseEntity<>(books, books.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@PostMapping("/addbook")
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
	
	@GetMapping("/books/category/{cat}")
	public ResponseEntity<?> getBooksByCategory(@PathVariable String cat) throws BookCollectionException {
		try {
			List<Book> books = bookService.getBooksByCat(cat);	
			return new ResponseEntity<>(books, HttpStatus.OK);
		}catch(BookCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/book/delete/{id}")
	public ResponseEntity<?> deleteById(@PathVariable String id) {
		try {
			bookService.deleteBookById(id);
			return new ResponseEntity<>("Succcesfully deleted with id " + id, HttpStatus.OK);
		} catch (BookCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/book/update/{id}")
	public ResponseEntity<?> update(@PathVariable String id, @RequestBody Book book) {

		try {
			bookService.update(id, book);
			return new ResponseEntity<>("Updated Book with id " + id, HttpStatus.OK);
		} catch (BookCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
//	@PutMapping("/book/up/{id}")
//	public ResponseEntity<?> updatePrice(@PathVariable String id, @RequestBody int price) {
//
//		try {
//			bookService.updatePrice(id, price);
//			return new ResponseEntity<>("Price is updated with book id " + id, HttpStatus.OK);
//		} catch (BookCollectionException e) {
//			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
//		}
//	}
//	
//	@PutMapping("/book/uq/{id}")
//	public ResponseEntity<?> updateQuantity(@PathVariable String id, @RequestBody int quant) {
//
//		try {
//			bookService.updatePrice(id, quant);
//			return new ResponseEntity<>("Quantity is updated with book id " + id, HttpStatus.OK);
//		} catch (BookCollectionException e) {
//			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
//		}
//	}

	@GetMapping("/books/sort/{field}")
	public ResponseEntity<?> getBooksBySorting(@PathVariable String field) throws BookCollectionException {
			
		List<Book> books = bookService.findBooksWithsorting(field);	
		return new ResponseEntity<>(books, HttpStatus.OK);
		
	}
	
	@GetMapping("/books/pagination/{offset}")
	public ResponseEntity<?> getBooksByPagination(@PathVariable int offset) throws BookCollectionException {
			
		Page<Book> books = bookService.findProductWithPagination(offset,12);	
		return new ResponseEntity<>(books, HttpStatus.OK);
		
	}
	
	@GetMapping("/books/search/{searchWord}")
	public ResponseEntity<?> searching(@PathVariable String searchWord) throws BookCollectionException {
		try {
			List<Book> books = bookService.searchBook(searchWord);
			return new ResponseEntity<>(books, HttpStatus.OK);
		}catch (BookCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
		
	}
	
	
}

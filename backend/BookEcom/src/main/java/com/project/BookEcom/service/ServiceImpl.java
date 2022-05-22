package com.project.BookEcom.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;

import com.project.BookEcom.book.repository.BookRepository;
import com.project.BookEcom.exception.BookCollectionException;
import com.project.BookEcom.model.Book;

public class ServiceImpl implements Service {

	@Autowired
	private BookRepository bookRepo;

	@Override
	public void createBook(Book book) throws ConstraintViolationException, BookCollectionException {
		Optional<Book> books = bookRepo.findByBookName(book.getBookName());
		if (books.isPresent()) {
			throw new BookCollectionException(BookCollectionException.BookAlreadyExists());
		} else {
//			todo.setCreatedAt(new Date(System.currentTimeMillis()));
			bookRepo.save(book);
		}
	}

	@Override
	public List<Book> getAllBooks() {
		List<Book> books = bookRepo.findAll();
		if (books.size() > 0) {
			return books;
		} else {
			return new ArrayList<Book>();
		}
	}

	@Override
	public Book getSingleBook(String id) throws BookCollectionException {
		Optional<Book> book = bookRepo.findById(id);
		if (!book.isPresent()) {
			throw new BookCollectionException(BookCollectionException.NotFoundException(id));
		} else {
			return book.get();
		}
	}

	@Override
	public void deleteBookById(String id) throws BookCollectionException {
		Optional<Book> todoOptional = bookRepo.findById(id);

		if (!todoOptional.isPresent()) {
			throw new BookCollectionException(BookCollectionException.NotFoundException(id));
		} else {
			bookRepo.deleteById(id);
		}

	}

}

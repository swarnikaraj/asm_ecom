package com.project.BookEcom.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.project.BookEcom.book.repository.BookRepository;
import com.project.BookEcom.exception.BookCollectionException;
import com.project.BookEcom.model.Book;


@Service
public class ServiceImpl implements BookService {

	@Autowired
	private BookRepository bookRepo;

	@Override
	public void createBook(Book book) throws ConstraintViolationException, BookCollectionException {
		Book searchBook = bookRepo.findByBookName(book.getBookName());
		if (searchBook != null) {
			searchBook.setQuantity((book.getQuantity())+(searchBook.getQuantity()));
			bookRepo.save(searchBook);
		} else {
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

	@Override
	public List<Book> getBooksByCat(String cat) throws BookCollectionException {
		List<Book> books = bookRepo.findByCategory(cat);
		if(books.size() > 0) {
			return books;
		}else {
			throw new BookCollectionException(BookCollectionException.CategoryNotFound(cat));
		}
	}
	
	@Override
	public List<Book> getBooksByAuthName(String authName) throws BookCollectionException {
		List<Book> books = bookRepo.findByAuthName(authName);
		if(books.size() > 0) {
			return books;
		}else {
			return new ArrayList<>();
		}
	}
//
//	@Override
//	public void updateRating(String id, int rating) throws BookCollectionException {
//		Book book = bookRepo.findByBookId(id);
//		if(book == null) {
//			throw new BookCollectionException(BookCollectionException.NotFoundException(id));
//		}else {
//			book.setRating(rating);
//			bookRepo.save(book);
//		}
//	}

//	@Override
//	public void updatePrice(String id, int price) throws BookCollectionException {
//		Book book = bookRepo.findByBookId(id);
//		if(book == null) {
//			throw new BookCollectionException(BookCollectionException.NotFoundException(id));
//		}else {
//			book.setBookPrice(price);
//			bookRepo.save(book);
//		}
//		
//	}
//
//	@Override
//	public void updateQuantity(String id, int quant) throws BookCollectionException {
//		Book book = bookRepo.findByBookId(id);
//		if(book == null) {
//			throw new BookCollectionException(BookCollectionException.NotFoundException(id));
//		}else {
//			book.setQuantity(quant);
//			bookRepo.save(book);
//		}
//		
//	}
	
	@Override
	public List<Book> findBooksWithsorting(String field){
		return bookRepo.findAll(Sort.by(Sort.Direction.DESC, field));	
	}
	
	@Override
	public Page<Book> findProductWithPagination(int OffSet, int pageSize){
		Page<Book> books = bookRepo.findAll(PageRequest.of(OffSet,pageSize));
		return books;
	}
	

	@Override
	public Page<Book> findProductWithPaginationAndSorting(int OffSet, int pageSize, String field){
		Page<Book> books = bookRepo.findAll(PageRequest.of(OffSet,pageSize).withSort(Sort.by(field)));
		return books;
	}

	@Override
	public void update(String id, Book book) throws BookCollectionException {
		Book searchBook = bookRepo.findByBookId(id);
		if(book == null) {
			throw new BookCollectionException(BookCollectionException.NotFoundException(id));
		}else {
			searchBook.setBookAuthorName(book.getBookAuthorName());
			searchBook.setBookDescription(book.getBookDescription());
			searchBook.setBookName(book.getBookName());
			searchBook.setBookPrice(book.getBookPrice());
			searchBook.setCategory(book.getCategory());
			searchBook.setQuantity(book.getQuantity());
			searchBook.setRating(book.getRating());
			searchBook.setUrl(book.getUrl());
			bookRepo.save(searchBook);
		}
	}

	@Override
	public List<Book> searchBook(String searchWord) throws BookCollectionException {
		List<Book> books = bookRepo.findAll();
		List<Book> searchedBook = new ArrayList<>();
		for(Book book : books) {
			if(book.getBookName().contains(searchWord)) {
				searchedBook.add(book);
			}
		}
		if(searchedBook.size() != 0) {
			return searchedBook;
		}else {
			throw new BookCollectionException(BookCollectionException.NotFoundException(searchWord));
		}
	}
	
}

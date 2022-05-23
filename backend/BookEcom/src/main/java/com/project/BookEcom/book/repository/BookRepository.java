package com.project.BookEcom.book.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.BookEcom.model.Book;

@Repository
public interface BookRepository extends MongoRepository<Book, String> {

	@Query("{'bookName':?0}")
	Optional<Book> findByBookName(String bookName);
	
	@Query("{'category':?0}")
	List<Book> findByCategory(String category);
	
	@Query("{'bookAuthorName':?0}")
	List<Book> findByAuthName(String authName);
	
}

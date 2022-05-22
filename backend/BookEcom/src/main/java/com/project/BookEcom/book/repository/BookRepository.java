package com.project.BookEcom.book.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.BookEcom.model.Book;

@Repository
public interface BookRepository extends MongoRepository<Book, String> {

	
	@Query("{'bookName':?0}")
	Optional<Book> findByBookName(String bookName);

}

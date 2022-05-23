package com.project.BookEcom.service;

import java.util.List;
import java.util.Optional;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.BookEcom.exception.UserCollectionException;
import com.project.BookEcom.model.Book;
import com.project.BookEcom.model.User;
import com.project.BookEcom.user.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public void createUser(User user) throws ConstraintViolationException, UserCollectionException {
		Optional<User> users = userRepo.findByUserName(user.getUserName());
		if (users.isPresent()) {
			throw new UserCollectionException(UserCollectionException.UserAlreadyExists());
		} else {
//			todo.setCreatedAt(new Date(System.currentTimeMillis()));
			userRepo.save(user);
		}
		
	}

	@Override
	public void addBookToCart(Book book, String userId) throws UserCollectionException {
		User user = userRepo.findByUserId(userId);
		if (user != null) {
			List<Book> booksInCart = user.getIssuedBooks();
			booksInCart.add(book);
			userRepo.save(user);
		}else {
			throw new UserCollectionException(UserCollectionException.UserNotFoundException(userId));
		}
		
	}

	@Override
	public void deleteBookFromCart(String bookId, String userId) {
		
		
	}

}

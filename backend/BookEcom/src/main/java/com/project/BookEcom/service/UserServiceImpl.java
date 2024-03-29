package com.project.BookEcom.service;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project.BookEcom.book.repository.BookRepository;
import com.project.BookEcom.exception.BookCollectionException;
import com.project.BookEcom.exception.UserCollectionException;
import com.project.BookEcom.model.Book;
import com.project.BookEcom.model.UserModel;
import com.project.BookEcom.user.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService , UserDetailsService{

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private BookRepository bookRepo;

	@Override
	public void createUser(UserModel user) throws ConstraintViolationException, UserCollectionException {
		UserModel findUser = userRepo.findByUserName(user.getUserName());
		if (findUser == null) {
			userRepo.save(user);
		} else {
			throw new UserCollectionException(UserCollectionException.UserAlreadyExists());
		}

	}

	@Override
	public void addBookToCart(String bookId, String userId) throws UserCollectionException, BookCollectionException {
		UserModel user = userRepo.findByUserId(userId);
		if (user != null) {
			Book book = bookRepo.findByBookId(bookId);
			if (book != null) {
				List<Book> booksInCart = user.getBooksInCart();
				booksInCart.add(book);
				userRepo.save(user);
			} else {
				throw new BookCollectionException(BookCollectionException.NotFoundException(bookId));
			}
		} else {
			throw new UserCollectionException(UserCollectionException.UserNotFoundException(userId));
		}

	}

	@Override
	public void deleteBookFromCart(String bookId, String userId) {
		UserModel user = userRepo.findByUserId(userId);

		List<Book> books = user.getBooksInCart();
		for(int i =0; i< books.size(); i++) {
			if(books.get(i).getBookId().equals(bookId)) {
				books.remove(i);
			}
		}
		user.setBooksInCart(books);
		userRepo.save(user);
	}

	@Override
	public List<UserModel> getAllUsers() {
		List<UserModel> users = userRepo.findAll();
		if (users.size() > 0) {
			return users;
		} else {
			return new ArrayList<UserModel>();
		}
	}

	@Override
	public List<Book> showCart(String userId) throws UserCollectionException {
		UserModel user = userRepo.findByUserId(userId);
		if (user != null) {
			List<Book> books = user.getBooksInCart();
			if(books.size() > 0)
				return books;
			else {
				return new ArrayList<>();
			}
		} else {
			throw new UserCollectionException(UserCollectionException.UserNotFoundException(userId));
		}
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserModel foundedUser = userRepo.findByUserName(username);
		if(foundedUser == null) return null;
		
		String name = foundedUser.getUserName();
		String pwd = foundedUser.getPassword();
		
		return (UserDetails) new User(name, pwd, new ArrayList<>());
	}

	@Override
	public void checkout(String userId) {
		UserModel user = userRepo.findByUserId(userId);
		List<Book> booksInCart = user.getBooksInCart();
		for(Book book: booksInCart) {
			Book searchBook = bookRepo.findByBookId(book.getBookId());
			searchBook.setQuantity(book.getQuantity()-1);
			bookRepo.save(searchBook);
		}
		user.setMyOrders(booksInCart);
		booksInCart.clear();
		user.setBooksInCart(booksInCart);
		userRepo.save(user);
	}

	@Override
	public List<Book> myOrders(String userid) {
		UserModel user = userRepo.findByUserId(userid);
		return user.getMyOrders();
	}   

}

package com.project.BookEcom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.project.BookEcom.model.AuthenticationRequest;
import com.project.BookEcom.model.AuthenticationResponse;
import com.project.BookEcom.model.UserModel;
import com.project.BookEcom.service.UserServiceImpl;
import com.project.BookEcom.user.repository.UserRepository;
import com.project.BookEcom.utils.JwtUtils;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
	
	
	@Autowired 
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserServiceImpl userService;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping("/dashboard")
	private String testingToken() {
		return "Welcome to the Dashboard "+ SecurityContextHolder.getContext().getAuthentication().
				getName();
	}
		
	@PostMapping("/auth")
	private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authenticationRequest){
		String username = authenticationRequest.getUsername();
		String password = authenticationRequest.getPassword();
		String role = "";
		String userId = "";
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
//			return ResponseEntity.ok(new AuthenticationResponse("Succesfull authentication of client "+username));
			UserModel user = userRepo.findByUserName(username);
			role = user.getRole();
			userId = user.getUserId();
		}catch (Exception e) {
			new ResponseEntity<>(e.getMessage()+ username, HttpStatus.NOT_FOUND);
		}

		UserDetails loadedUser = userService.loadUserByUsername(username);
		String generatedToken = jwtUtils.generateToken(loadedUser);
		
		return ResponseEntity.ok(new AuthenticationResponse(generatedToken, role, userId));
		
//		return ResponseEntity.ok(new AuthenticationResponse("Success"));
	}
	
	@GetMapping("/userdetails")
	public ResponseEntity<?> user(@RequestHeader(value="Authorization") String token ) {
		System.out.println(token);
		
		try {
			return new ResponseEntity<>("working fine",HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>("Error during client Subscription ",HttpStatus.NOT_FOUND);
		}
	}
}


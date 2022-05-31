package com.project.BookEcom.model;

public class AuthenticationResponse {

	public String response;
	public String role;
	public String userId;

	public AuthenticationResponse() {
		
	}

	public AuthenticationResponse(String response, String role, String userId) {
		this.response = response;
		this.role = role;
		this.userId = userId;
	}
	
	

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}
	
	
}

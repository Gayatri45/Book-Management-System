package com.manit.BookManagement.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ServiceResponse<T> {
	
	private String status;
	private T data;
	
	public ServiceResponse(String status, T data) {
		super();
		this.status = status;
		this.data = data;
	}
	

}

package com.manit.BookManagement.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

	@GetMapping("/home")
	public String home() {
		return "home";
	}

//	@GetMapping("/homePage")
//	public ModelAndView homePage() {
//		ModelAndView mav = new ModelAndView("home");
//		return mav;
//	}

}

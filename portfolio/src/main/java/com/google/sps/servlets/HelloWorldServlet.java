package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.Math;
import java.util.Random;
/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    String currentMessage;
    String[] messages = {"<h1>Hello world!</h1>", "<h1> hello lovely!</h1>", "<h1>Hello sps!</h1>", "<h1>Hello team43!</h1>"};
    Random rand = new Random();
    currentMessage = messages [rand.nextInt( messages.length)];

     //System.out.println(currentRoom);  
    response.getWriter().println(currentMessage);

  }
}

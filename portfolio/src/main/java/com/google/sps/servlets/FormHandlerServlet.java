package main.java.com.google.sps.servlets;


import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String recruiterName = request.getParameter("name");
     String recruiterEmail = request.getParameter("email");
    String message = request.getParameter("message");

    // Print the value so you can see it in the server logs.
    System.out.println("recruiter name: " +recruiterName );
    System.out.println(" email: " +recruiterEmail );
    System.out.println("message: " +message);

  
      //redirect user to my webpage
    response.sendRedirect("https://www.linkedin.com/in/daniel-kalu-29927a197/");
    

    // Write the value to the response so the user can see it.
    response.getWriter().println("You name: " + recruiterName);
    response.getWriter().println("You email: " + recruiterEmail);
    response.getWriter().println("The message you are sending: " + message);

  }
}
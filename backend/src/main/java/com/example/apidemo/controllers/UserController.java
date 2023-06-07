package com.example.apidemo.controllers;

import com.example.apidemo.models.Credentials;
import com.example.apidemo.models.User;
import com.example.apidemo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserService userService;

    //constructor
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path = "/testhit")
    public ResponseEntity<String> endpointHit() {
        return ResponseEntity.ok("HELLLLLLOOOOOOO WAHID");
    }

    @PostMapping(path = "/endpoint")
    public void handleFormData(@RequestBody User formData) {
        // Process the form data
        System.out.println(formData.getFirstName());

        // Do something with the data (e.g., save to a database)
        // ...
        userService.createUser(formData);
    }

    @PostMapping(path = "/login")
    public int handleLogin(@RequestBody Credentials cred) {
        // Process the form data
        User loggedin = userService.getUserByEmail(cred.getEmail());
        System.out.println(loggedin);
        if(loggedin != null)
            if(cred.getPassword().equals(loggedin.getPassword()))
                return 0;
            else
                return 1;
        else
            return 1;
        // Do something with the data (e.g., save to a database)
        // ...
//        userService.createUser(formData);
    }

    @GetMapping(path = "/getdetails")
    public ResponseEntity<User> getDetails() {

        User u = userService.getUserByEmail("toriahearn@gmail.com");
        System.out.println("Sending to front: " + u);

        return ResponseEntity.ok(u);
    }
}

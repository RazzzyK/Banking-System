package com.example.apidemo.controllers;

import com.example.apidemo.models.Credentials;
import com.example.apidemo.models.User;
import com.example.apidemo.services.UserService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserService userService;
    private final ObjectMapper objectMapper = new ObjectMapper();

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
    public ResponseEntity<User> handleLogin(@RequestBody Credentials cred) {
        // Process the form data
        User loggedin = userService.getUserByEmail(cred.getEmail());
        System.out.println(loggedin);
        if(loggedin != null)
            if(cred.getPassword().equals(loggedin.getPassword()))
                return ResponseEntity.ok(loggedin);
            else
                return ResponseEntity.ok(null);
        else
            return ResponseEntity.ok(null);
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

    @PostMapping(path = "/updatechecking")
    public ResponseEntity<User> updateChecking(@RequestBody String json) {
        String email = "";
        double amount = 0;
        try {
            JsonNode rootNode = objectMapper.readTree(json);

            // Extract values from the JSON using JsonNode methods
            email = rootNode.get("email").asText();
            amount = rootNode.get("amount").asDouble();
        } catch (Exception e) {
            ResponseEntity.notFound().build();
            e.printStackTrace();
        }

        User userToUpdate = userService.getUserByEmail(email);

        User userUpdated = userService.updateCheckingAccount(userToUpdate);
        System.out.println(userUpdated);

        return ResponseEntity.ok(userUpdated);
    }

    @PostMapping(path = "/withdrawl")
    public ResponseEntity<User> withdrawl(@RequestBody String json) {
        String email = "";
        double amount = 0;
        try {
            JsonNode rootNode = objectMapper.readTree(json);

            // Extract values from the JSON using JsonNode methods
            email = rootNode.get("email").asText();
            amount = rootNode.get("amount").asDouble();
        } catch (Exception e) {
            ResponseEntity.notFound().build();
            e.printStackTrace();
        }

        User userToUpdate = userService.getUserByEmail(email);
        if(userToUpdate.getCheckingAccount() < amount)
            return ResponseEntity.badRequest().build();
        else {
            userToUpdate.setCheckingAccount(userToUpdate.getCheckingAccount() - amount);
            return ResponseEntity.ok(userService.withdrawChecking(userToUpdate));
        }
    }
}

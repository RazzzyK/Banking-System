package com.example.apidemo.controllers;

import com.example.apidemo.models.Transaction;
import com.example.apidemo.repositories.TransactionRepository;
import com.example.apidemo.services.TransactionService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class TransactionController {
    private final TransactionService transactionService;

    @Autowired
    public TransactionController(TransactionService t) {
        transactionService = t;
    }

    @PostMapping(path = "/createtrans")
    public ResponseEntity<Object> createTransaction(@RequestBody Transaction t) {
        transactionService.createTransaction(t);

        return ResponseEntity.ok("Created Transaction");
    }

}

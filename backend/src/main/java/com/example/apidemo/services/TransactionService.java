package com.example.apidemo.services;

import com.example.apidemo.models.Transaction;
import com.example.apidemo.repositories.TransactionRepository;
import com.example.apidemo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public Transaction createTransaction(Transaction tran) {
        return transactionRepository.save(tran);
    }
}

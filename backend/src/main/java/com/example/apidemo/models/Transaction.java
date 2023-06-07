package com.example.apidemo.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "Transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String typeOfTransaction;  //Withdrawl, Deposit, Wire Transfer
    private String receiver;
    private String sender;  //user
    private String amount;
    private String details;
}

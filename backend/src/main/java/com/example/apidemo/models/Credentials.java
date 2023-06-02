package com.example.apidemo.models;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Credentials {
    private String email;
    private String password;
}
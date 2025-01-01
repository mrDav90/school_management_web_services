package com.groupeisi.school_management.etudiant_ms.dto.responses;

import com.groupeisi.school_management.etudiant_ms.entities.Gender;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
public class EtudiantDtoResponse implements Serializable {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private LocalDate dateOfBirth;
    private Gender gender;
}

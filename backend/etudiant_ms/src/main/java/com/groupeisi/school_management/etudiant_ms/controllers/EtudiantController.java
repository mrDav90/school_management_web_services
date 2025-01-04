package com.groupeisi.school_management.etudiant_ms.controllers;

import com.groupeisi.school_management.etudiant_ms.dto.requests.EtudiantDtoRequest;
import com.groupeisi.school_management.etudiant_ms.dto.responses.EtudiantDtoResponse;
import com.groupeisi.school_management.etudiant_ms.services.IEtudiantService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin("*")
@RequestMapping("/api")
@AllArgsConstructor
public class EtudiantController {
    private IEtudiantService etudiantService;

    @GetMapping("/v1/etudiants")
    public ResponseEntity<List<EtudiantDtoResponse>> listEtudiants() {
        return ResponseEntity.ok(this.etudiantService.getAllEtudiants());
    }

    @GetMapping("/v1/etudiant/{id}")
    public ResponseEntity<EtudiantDtoResponse> getEtudiantById(@PathVariable int id) {
        return ResponseEntity.ok(etudiantService.getEtudiant(id));
    }

    @PostMapping("/v1/etudiant")
    public ResponseEntity<EtudiantDtoResponse> addEtudiant(@RequestBody EtudiantDtoRequest etudiantDtoRequest) {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.etudiantService.addEtudiant(etudiantDtoRequest));
    }

    @PutMapping("/v1/etudiant/{id}")
    public ResponseEntity<EtudiantDtoResponse> updateEtudiant(@PathVariable int id , @RequestBody EtudiantDtoRequest etudiantDtoRequest) {
        return ResponseEntity.ok(etudiantService.updateEtudiant(id, etudiantDtoRequest));
    }

    @DeleteMapping("/v1/etudiant/{id}")
    public ResponseEntity<Boolean> deleteEtudiant(@PathVariable int id ) {
        return ResponseEntity.ok(etudiantService.deleteEtudiant(id));
    }


}

package com.groupeisi.school_management.etudiant_ms.services;

import com.groupeisi.school_management.etudiant_ms.dto.requests.EtudiantDtoRequest;
import com.groupeisi.school_management.etudiant_ms.dto.responses.EtudiantDtoResponse;

import java.util.List;

public interface IEtudiantService {
    List<EtudiantDtoResponse> getAllEtudiants();
    EtudiantDtoResponse getEtudiant(int id);
    EtudiantDtoResponse addEtudiant(EtudiantDtoRequest etudiantDtoRequest);
    EtudiantDtoResponse updateEtudiant(int id , EtudiantDtoRequest etudiantDtoRequest);
    boolean deleteEtudiant(int id);
}

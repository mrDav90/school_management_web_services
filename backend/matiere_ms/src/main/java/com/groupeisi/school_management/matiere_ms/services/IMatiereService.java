package com.groupeisi.school_management.matiere_ms.services;

import com.spring.training.model.Matiere;
import java.util.List;

public interface IMatiereService {
    List<Matiere> getAllMatieres();
    Matiere getMatiereById(int id);
    Matiere addMatiere(Matiere matiere);
    Matiere updateMatiere(int id , Matiere matiere);
    boolean deleteMatiere(int id);
}

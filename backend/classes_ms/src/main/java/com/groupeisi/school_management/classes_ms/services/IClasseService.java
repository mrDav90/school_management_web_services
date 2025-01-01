package com.groupeisi.school_management.classes_ms.services;


import com.groupeisi.school_management.classes_ms.entities.Classe;

import java.util.List;

public interface IClasseService {
    List<Classe> getAllClasses();
    Classe getClasse(int id);
    Classe addClasse(Classe classe);
    Classe updateClasse(int id , Classe classe);
    boolean deleteClasse(int id);
}

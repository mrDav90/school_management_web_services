package com.groupeisi.school_management.etudiant_ms.repositories;

import com.groupeisi.school_management.etudiant_ms.entities.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant, Integer> {

}

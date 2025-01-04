package com.groupeisi.school_management.matiere_ms.repositories;

import com.groupeisi.school_management.matiere_ms.entities.MatiereEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatiereRepository extends JpaRepository<MatiereEntity, Integer> {
}

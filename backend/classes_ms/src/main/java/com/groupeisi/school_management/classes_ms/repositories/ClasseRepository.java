package com.groupeisi.school_management.classes_ms.repositories;
import com.groupeisi.school_management.classes_ms.entities.Classe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClasseRepository extends JpaRepository<Classe, Integer> {
}

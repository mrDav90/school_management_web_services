package com.groupeisi.school_management.classes_ms.services.impl;

import com.groupeisi.school_management.classes_ms.entities.Classe;
import com.groupeisi.school_management.classes_ms.repositories.ClasseRepository;
import com.groupeisi.school_management.classes_ms.services.IClasseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClasseServiceImpl implements IClasseService {

    private ClasseRepository classeRepository;
    public ClasseServiceImpl(ClasseRepository classeRepository) {
        this.classeRepository = classeRepository;
    }
    public List<Classe> getAllClasses(){
        return classeRepository.findAll();
    }
    public Classe getClasse(int id){
        return classeRepository.findById(id).get();
    }
    public Classe addClasse(Classe classe){
        return classeRepository.save(classe);
    }
    public Classe updateClasse(int id , Classe classe){
        return classeRepository.findById(id).map(c -> {
            c.setName(classe.getName());
            return classeRepository.save(c);
        }).orElse(null);
    }
    public boolean deleteClasse(int id){
        try{
            classeRepository.deleteById(id);
            return true;
        }
        catch(Exception e){
            return false;
        }
    }
}

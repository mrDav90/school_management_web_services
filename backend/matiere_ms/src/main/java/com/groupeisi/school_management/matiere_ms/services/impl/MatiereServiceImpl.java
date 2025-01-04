package com.groupeisi.school_management.matiere_ms.services.impl;

import com.groupeisi.school_management.matiere_ms.mappers.MatiereMapper;
import com.groupeisi.school_management.matiere_ms.repositories.MatiereRepository;
import com.groupeisi.school_management.matiere_ms.services.IMatiereService;
import com.spring.training.model.Matiere;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MatiereServiceImpl implements IMatiereService {
    private final MatiereRepository matiereRepository;
    private final MatiereMapper matiereMapper;

    @Override
    public List<Matiere> getAllMatieres() {
        var matieres = matiereRepository.findAll();
        return matiereMapper.toMatiereList(matieres);
    }

    @Override
    public Matiere getMatiereById(int id) {
        return matiereMapper.toMatiere(matiereRepository.findById(id).get());
    }

    @Override
    public Matiere addMatiere(Matiere matiere) {
        var mat = matiereMapper.toMatiereEntity(matiere);
        return matiereMapper.toMatiere(matiereRepository.save(mat));
    }

    @Override
    public Matiere updateMatiere(int id, Matiere matiere) {
        return matiereRepository.findById(id).map(m -> {
            m.setName(matiere.getName());
            return matiereMapper.toMatiere(matiereRepository.save(m));
        }).orElse(null);
    }

    @Override
    public boolean deleteMatiere(int id) {
        try{
            matiereRepository.deleteById(id);
            return true;
        }
        catch(Exception e){
            return false;
        }
    }

}

package com.groupeisi.school_management.etudiant_ms.services.impl;

import com.groupeisi.school_management.etudiant_ms.dto.requests.EtudiantDtoRequest;
import com.groupeisi.school_management.etudiant_ms.dto.responses.EtudiantDtoResponse;
import com.groupeisi.school_management.etudiant_ms.mapper.EtudiantMapper;
import com.groupeisi.school_management.etudiant_ms.repositories.EtudiantRepository;
import com.groupeisi.school_management.etudiant_ms.services.IEtudiantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EtudiantServiceImpl implements IEtudiantService {

    private final EtudiantRepository etudiantRepository;
    private final EtudiantMapper etudiantMapper;

    @Override
    public List<EtudiantDtoResponse> getAllEtudiants() {
        var etudiants = etudiantRepository.findAll();
        return etudiantMapper.toEtudiantDtoResponseList(etudiants);
    }

    @Override
    public EtudiantDtoResponse getEtudiant(int id) {
        return etudiantMapper.toEtudiantDtoResponse(etudiantRepository.findById(id).get());
    }

    @Override
    public EtudiantDtoResponse addEtudiant(EtudiantDtoRequest etudiantDtoRequest) {
        var etudiant = etudiantMapper.toEtudiant(etudiantDtoRequest);
        return etudiantMapper.toEtudiantDtoResponse(etudiantRepository.save(etudiant));
    }

    @Override
    public EtudiantDtoResponse updateEtudiant(int id, EtudiantDtoRequest etudiantDtoRequest) {
        return etudiantRepository.findById(id).map(etudiant -> {
            etudiant.setLastName(etudiantDtoRequest.getLastName());
            etudiant.setFirstName(etudiantDtoRequest.getFirstName());
            etudiant.setEmail(etudiantDtoRequest.getEmail());
            etudiant.setPhone(etudiantDtoRequest.getPhone());
            etudiant.setDateOfBirth(etudiantDtoRequest.getDateOfBirth());
            etudiant.setGender(etudiantDtoRequest.getGender());
            return etudiantMapper.toEtudiantDtoResponse(etudiantRepository.save(etudiant));
        }).orElse(null);
    }

    @Override
    public boolean deleteEtudiant(int id) {
        try{
            etudiantRepository.deleteById(id);
            return true;
        }
        catch(Exception e){
            return false;
        }
    }
}

package com.groupeisi.school_management.etudiant_ms.mapper;

import com.groupeisi.school_management.etudiant_ms.dto.requests.EtudiantDtoRequest;
import com.groupeisi.school_management.etudiant_ms.dto.responses.EtudiantDtoResponse;
import com.groupeisi.school_management.etudiant_ms.entities.Etudiant;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface EtudiantMapper {
    @Mapping(source = "id", target = "id")
    @Mapping(source = "firstName", target = "firstName")
    @Mapping(source = "lastName", target = "lastName")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "phone", target = "phone")
    @Mapping(source = "gender", target = "gender")
    @Mapping(source = "dateOfBirth", target = "dateOfBirth")
    Etudiant toEtudiant(EtudiantDtoRequest etudiantDtoRequest);
    EtudiantDtoResponse toEtudiantDtoResponse(Etudiant etudiant);
    List<EtudiantDtoResponse> toEtudiantDtoResponseList(List<Etudiant> etudiants);
}

package com.groupeisi.school_management.matiere_ms.mappers;
import com.groupeisi.school_management.matiere_ms.entities.MatiereEntity;
import com.spring.training.model.Matiere;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper
public interface MatiereMapper {
    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    MatiereEntity toMatiereEntity(Matiere matiere);
    Matiere toMatiere(MatiereEntity matiereEntity);
    List<Matiere> toMatiereList(List<MatiereEntity> matiereEntitiesList);
}

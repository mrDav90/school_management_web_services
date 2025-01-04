package com.groupeisi.school_management.matiere_ms.endpoints;

import com.groupeisi.school_management.matiere_ms.services.IMatiereService;
import com.spring.training.model.*;
import lombok.AllArgsConstructor;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import static com.groupeisi.school_management.matiere_ms.config.WebServiceConfig.NAMESPACE_URI;

@Endpoint
@AllArgsConstructor
public class MatiereEndpoint {
    private final IMatiereService matiereService;

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getMatieresRequest")
    @ResponsePayload
    public GetMatieresResponse getMatieres(@RequestPayload GetMatieresRequest request) {
        GetMatieresResponse response = new GetMatieresResponse();
        response.getMatieres().addAll(matiereService.getAllMatieres());
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getMatiereRequest")
    @ResponsePayload
    public GetMatiereResponse getMatiereRequest(@RequestPayload GetMatiereRequest request) {
        GetMatiereResponse response = new GetMatiereResponse();
        response.setMatiere(matiereService.getMatiereById(request.getId()));
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "createMatiereRequest")
    @ResponsePayload
    public CreateMatiereResponse createMatiereRequest(@RequestPayload CreateMatiereRequest request) {
        CreateMatiereResponse response = new CreateMatiereResponse();
        Matiere matiere = new Matiere();
        matiere.setName(request.getName());
        response.setMatiere(matiereService.addMatiere(matiere));
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "updateMatiereRequest")
    @ResponsePayload
    public UpdateMatiereResponse updateMatiereRequest(@RequestPayload UpdateMatiereRequest request) {
        UpdateMatiereResponse response = new UpdateMatiereResponse();
        Matiere matiere = new Matiere();
        matiere.setName(request.getName());
        response.setMatiere(matiereService.updateMatiere(request.getId(), matiere));
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "deleteMatiereRequest")
    @ResponsePayload
    public DeleteMatiereResponse deleteMatiereRequest(@RequestPayload DeleteMatiereRequest request) {
        DeleteMatiereResponse response = new DeleteMatiereResponse();
        response.setIsDeleted(matiereService.deleteMatiere(request.getId()));
        return response;
    }
}

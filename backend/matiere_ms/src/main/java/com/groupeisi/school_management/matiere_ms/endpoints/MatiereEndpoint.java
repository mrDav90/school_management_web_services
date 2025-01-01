package com.groupeisi.school_management.matiere_ms.endpoints;

import org.springframework.stereotype.Component;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;
import com.groupeisi.school_management.GetHelloRequest;

@Endpoint
@Component
public class MatiereEndpoint {
    private static final String NAMESPACE_URI = "http://groupeisi.com/matiere-web-service";
    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "GetMatiereRequest")
    @ResponsePayload
    public GetMatiereResponse getHello(@RequestPayload GetHelloRequest request) {
        GetHelloResponse response = new GetHelloResponse();
        String name = request.getName();
        String greeting = "Hello, " + name + "!";
        response.setGreeting(greeting);
        return response;
    }
}

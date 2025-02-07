FROM openjdk:17-jdk-slim

LABEL maintainer="David kangnigabiam720@gmail.com"

EXPOSE 8080

COPY target/api-gateway-0.0.1-SNAPSHOT.jar api-gateway.jar

ENTRYPOINT ["java", "-jar", "api-gateway.jar"]

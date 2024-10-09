# Usando uma imagem base oficial do Java para rodar o Spring Boot
FROM openjdk:17-jdk-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /dsmovie

# Copie o arquivo JAR do projeto gerado pelo Maven/Gradle para o contêiner
COPY target/dsmovie-0.0.1-SNAPSHOT.jar app.jar

# Expor a porta 8080 (ou a porta configurada no seu Spring Boot)
EXPOSE 8081

# Comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]

# Usar a imagem oficial do Java como base
FROM openjdk:17-jdk-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo .jar gerado pela compilação do Maven para o contêiner
COPY target/dsmovie-0.0.1-SNAPSHOT.jar app.jar

# Expõe a porta que será usada pela aplicação Spring Boot
EXPOSE 8081

# Comando para rodar a aplicação
# Comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]




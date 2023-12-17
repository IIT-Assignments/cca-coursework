FROM openjdk:17-jdk-slim

WORKDIR /app

RUN  mvn package -Dmaven.test.skip

COPY target/*.jar app.jar

ENTRYPOINT ["java","-jar","/app/app.jar"]
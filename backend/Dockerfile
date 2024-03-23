# Start with a base image containing Java runtime and Maven
FROM maven:3.8.1-openjdk-11-slim as build

# Make source folder
WORKDIR /app

# Copy pom.xml and source code to the container
COPY pom.xml .
COPY src ./src

# Package the application
RUN mvn clean package

# Start with a base image containing Java runtime
FROM openjdk:11-jdk-slim

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Copy application's jar file to the container
COPY --from=build /home/app/target/*.jar app.jar

# Run the jar file 
ENTRYPOINT ["java","-jar","/app.jar"]
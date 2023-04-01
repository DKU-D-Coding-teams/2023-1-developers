FROM scottyengineering/java11
WORKDIR /usr/src/app
ARG JAR_PATH=./build/libs
COPY ${JAR_PATH}/dankook-0.0.1-SNAPSHOT.jar ${JAR_PATH}/dankook-0.0.1-SNAPSHOT.jar
CMD ["java","-jar","./build/libs/dankook-0.0.1-SNAPSHOT.jar"]
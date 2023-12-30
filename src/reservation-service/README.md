#Build the docker image for Flight Service
docker build --platform=linux/amd64 -t rusiruavb/reservation-service:latest .

#Run Docker image for Flight Service in a container
docker container run -d -p 8088:8088 rusiruavb/reservation-service:latest

docker container ls

#Stop Docker Container
docker container stop {CONTAINER_ID}

#Push Docker image to the docker hub
docker push rusiruavb/reservation-service:latest
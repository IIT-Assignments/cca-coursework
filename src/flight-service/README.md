#Build the docker image for Flight Service
docker build -t senuradockacc/flight-service:latest .

#Run Docker image for Flight Service in a container
docker container run -d -p 3000:3000 senuradockacc/flight-service:latest

docker container ls

#Stop Docker Container
docker container stop {CONTAINER_ID}

#Push Docker image to the docker hub
docker push senuradockacc/flight-service:latest
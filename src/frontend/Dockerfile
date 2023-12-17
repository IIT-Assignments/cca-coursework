# Fetching the latest node image on alpine linux
FROM node:alpine AS development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package*.json /react-app

ARG REACT_APP_FLIGHT_SERVICE_ARG
ENV REACT_APP_FLIGHT_SERVICE=$REACT_APP_FLIGHT_SERVICE_ARG

RUN npm install

# Copying all the files in our project
COPY . .

EXPOSE 3000

# Starting our application
CMD ["npm","start"]
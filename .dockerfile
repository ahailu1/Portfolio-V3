from ubuntu:latest

LABEL key="linux container"

RUN apt-get update && apt-get upgrade -y

RUN apt-get install nginx -y

Run mkdir /var/www

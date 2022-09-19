FROM mysql:latest

LABEL description="My Custom Mysql Docker Image"

# Add a database
ENV MYSQL_DATABASE CARDS

#Check out docker entry point for further configuration :

# https://github.com/docker-library/mysql

COPY ./init-scripts/ /docker-entrypoint-initdb.d/

FROM mongodb/mongodb-community-server:latest

USER root

RUN apt-get install systemd

RUN apt-get install -y wget gnupg
RUN wget -qO- https://www.mongodb.org/static/pgp/server-7.0.asc | tee /etc/apt/trusted.gpg.d/server-7.0.asc
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list
RUN apt-get update
RUN apt-get install -y mongodb-mongosh

EXPOSE 27017

COPY scripts mongoinit

WORKDIR /mongoinit

RUN mongosh admin -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD" --eval "show dbs" > text

USER mongodb
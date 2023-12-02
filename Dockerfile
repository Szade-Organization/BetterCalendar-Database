FROM mongo:latest
ENV MONGO_INITDB_DATABASE=bettercalendar
COPY scripts /docker-entrypoint-initdb.d
EXPOSE 27017
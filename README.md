# BetterCalendar-Database

## How to run container:

### docker run

```
docker run -p 27017:27017  \
    -e "MONGO_INITDB_ROOT_USERNAME=username" \
    -e "MONGO_INITDB_ROOT_PASSWORD=password" \
    -v <path_to_directory_on_host>:/data/db \ (optional)
    ghcr.io/szade-organization/bettercalendar-database:latest
```

### docker-compose:

```
services:
  bettercalendar-database:
    image: ghcr.io/szade-organization/bettercalendar-database:latest
    ports:
      - 27017:27017
    environments:
      - "MONGO_INITDB_ROOT_USERNAME=username"
      - "MONGO_INITDB_ROOT_PASSWORD=password"
    volumes:
      - <path_to_directory_on_host>:/data/db #optional - mongodb data directory
```

## How to add data:

All .js files in scripts directory are executed on container startup for "bettercalendar" database and can be used for data inserting. For better order, add a new script for each new collection

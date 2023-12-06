# BetterCalendar-Database

## Connection string:
`BC_DB_CONNECTION_STRING='mongodb://user:password@localhost/?retryWrites=true&w=majority'`  
The user and password are set by you during running the container above.

## How to run container:

### docker run

```
docker run -itd -p 27017:27017  \
    -e "MONGO_INITDB_ROOT_USERNAME=username" \
    -e "MONGO_INITDB_ROOT_PASSWORD=password" \
    --name better-calendar-db \
    -v <path_to_directory_on_host>:/data/db \ (optional)
    ghcr.io/szade-organization/bettercalendar-database:latest
```
`username` and `password` are set by you.  
the `-v path_to_directory_on_host>:/data/db` is purely optional and mostly used if low on memory and want to run the db on specific disk.  
  
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

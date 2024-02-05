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

## How to add/update data:

All .js files in scripts directory are executed on container startup for "bettercalendar" database and can be used for data inserting. For better order, add a new script for each new collection

Each script has a "data" variable with JSON array. You can export collection to JSON file via MongoDBCompass. Select collection and click "Export data" and "Export the full collection". Save the file and copy content (whole array) to "data" variable in JS script.

You also have to modify exported JSON. Complex objects such as ObjectId, Date and NumberLong cannot be imported by dictionary declaration. You have to change dictionary declaration to constructor declaration. You can do this through e.g. VS Code with replace with Regex feature.

- **ObjectId**\
Find: "\{\n\s+"\$oid": (".+")\n\s+\}"\
Replace: "new ObjectId($1)"

- **Date**\
Find: "\{\n\s+"\$date": (".+")\n\s+\}"\
Replace: "new Date($1)"\

- **NumberLong**\
Find: "\{\n\s+"\$numberLong": (".+")\n\s+\}"\
Replace: "new NumberLong($1)"

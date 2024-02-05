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
Find: `\{\n\s+"\$oid": (".+")\n\s+\}`\
Replace: `new ObjectId($1)`

- **Date**\
Find: `\{\n\s+"\$date": (".+")\n\s+\}`\
Replace: `new Date($1)`

- **NumberLong**\
Find: `\{\n\s+"\$numberLong": (".+")\n\s+\}`\
Replace: `new NumberLong($1)`

### Making changes to scripts after changing the model

1. Create empty MongoDB server container (https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/)
2. Pull https://github.com/Szade-Organization/BetterCalendar-API repository
3. Set up SECRET_KEY and BC_DB_CONNECTION_STRING (to newly created server) environment variables
4. In BetterCalendar-API directory run `python config/manage.py migrate` and `python config/manage.py populate -u <number_of_users> -c <number_of_categories> -a <number_of_activities>` 
5. Open MongoDBCompass and connect to server
6. For every collection in bettercalendar database:\
6.1. Select collection from list\
6.2. Click "Export data" and "Export the full collection"\
6.3. Click "Export..." and save file\
6.4. Copy file content to `data` variable in collection's JS script (if script does not exist, create new one based on existing script)
7. Open "scripts" directory in VS Code
8. Click "Edit" and "Replace in files"
9. Replace all 3 above regexes in all files.

Steps 7-9 also probably can be done in shell using `sed`

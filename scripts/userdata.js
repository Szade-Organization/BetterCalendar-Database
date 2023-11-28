db = db.getSiblingDB('bettercalendar');
data = [
    {
        "_id": {
            "$oid": "655bced7186caa413bdbc5f1"
        },
        "id": 1,
        "user_name": "testuser",
        "e_mail": "test@test.com"
    },
    {
        "_id": {
            "$oid": "655bcf76c89ea8eb0bb63cfb"
        },
        "id": 2,
        "user_name": "testuser",
        "e_mail": "test@test.com"
    }
];
db.createCollection("API_userdata");
db.API_userdata.insert(data);
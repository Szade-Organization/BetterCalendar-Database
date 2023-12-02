data = [
    {
        "id": 1,
        "user_name": "testuser",
        "e_mail": "test@test.com"
    },
    {
        "id": 2,
        "user_name": "testuser",
        "e_mail": "test@test.com"
    }
];
db.createCollection("API_userdata");
db.API_userdata.insert(data);
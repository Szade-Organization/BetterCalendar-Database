data = [{
    "_id": new ObjectId("65c097b48201569859dc13b1"),
    "id": 1,
    "name": "work",
    "user_id": 1,
    "description": "Tasks and activities related to professional or occupational responsibilities.",
    "color": "GoldenRod",
    "icon": "general.svg",
    "importance_level": "S",
    "date_created": new Date("2024-02-05T08:09:24.863Z"),
    "date_modified": new Date("2024-02-05T08:09:24.863Z")
  },
  {
    "_id": new ObjectId("65c097b48201569859dc13b2"),
    "id": 2,
    "name": "hobbies",
    "user_id": 7,
    "description": "Pursuing personal interests and recreational activities.",
    "color": "Black",
    "icon": "stand.svg",
    "importance_level": "M",
    "date_created": new Date("2024-02-05T08:09:24.907Z"),
    "date_modified": new Date("2024-02-05T08:09:24.907Z")
  },
  {
    "_id": new ObjectId("65c097b48201569859dc13b3"),
    "id": 3,
    "name": "exercise",
    "user_id": 4,
    "description": "Physical activity done for the purpose of improving health and fitness.",
    "color": "DarkSlateBlue",
    "icon": "increase.svg",
    "importance_level": "C",
    "date_created": new Date("2024-02-05T08:09:24.946Z"),
    "date_modified": new Date("2024-02-05T08:09:24.946Z")
  },
  {
    "_id": new ObjectId("65c097b48201569859dc13b4"),
    "id": 4,
    "name": "yoga",
    "user_id": 2,
    "description": "Practicing yoga for physical and mental health.",
    "color": "Beige",
    "icon": "increase.svg",
    "importance_level": "C",
    "date_created": new Date("2024-02-05T08:09:24.980Z"),
    "date_modified": new Date("2024-02-05T08:09:24.980Z")
  },
  {
    "_id": new ObjectId("65c097b58201569859dc13b5"),
    "id": 5,
    "name": "hobbies",
    "user_id": 3,
    "description": "Pursuing personal interests and recreational activities.",
    "color": "Aquamarine",
    "icon": "evening.svg",
    "importance_level": "W",
    "date_created": new Date("2024-02-05T08:09:25.020Z"),
    "date_modified": new Date("2024-02-05T08:09:25.020Z")
  }];
  db.createCollection("API_category");
  db.getCollection('API_category').insertMany(data);
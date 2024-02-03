data = [{
    "id": 1,
    "name": "hobbies",
    "user_id": 8,
    "description": "Pursuing personal interests and recreational activities.",
    "color": "Lavender",
    "icon": "scene.svg",
    "importance_level": "W",
    "date_created": {
      "$date": "2023-12-18T21:31:36.190Z"
    },
    "date_modified": {
      "$date": "2023-12-18T21:31:36.190Z"
    }
  },
  {
    "id": 2,
    "name": "socializing",
    "user_id": 8,
    "description": "Interacting with others for recreational or social purposes.",
    "color": "SeaGreen",
    "icon": "decide.svg",
    "importance_level": "W",
    "date_created": {
      "$date": "2023-12-18T21:31:36.200Z"
    },
    "date_modified": {
      "$date": "2023-12-18T21:31:36.200Z"
    }
  },
  {
    "id": 3,
    "name": "socializing",
    "user_id": 8,
    "description": "Interacting with others for recreational or social purposes.",
    "color": "BurlyWood",
    "icon": "woman.svg",
    "importance_level": "N",
    "date_created": {
      "$date": "2023-12-18T21:31:36.212Z"
    },
    "date_modified": {
      "$date": "2023-12-18T21:31:36.212Z"
    }
  },
  {
    "id": 4,
    "name": "volunteering",
    "user_id": 5,
    "description": "Contributing time and effort to a charitable cause or organization.",
    "color": "PaleVioletRed",
    "icon": "send.svg",
    "importance_level": "W",
    "date_created": {
      "$date": "2023-12-18T21:31:36.223Z"
    },
    "date_modified": {
      "$date": "2023-12-18T21:31:36.223Z"
    }
  },
  {
    "id": 5,
    "name": "volunteering",
    "user_id": 6,
    "description": "Contributing time and effort to a charitable cause or organization.",
    "color": "DarkViolet",
    "icon": "middle.svg",
    "importance_level": "W",
    "date_created": {
      "$date": "2023-12-18T21:31:36.233Z"
    },
    "date_modified": {
      "$date": "2023-12-18T21:31:36.233Z"
    }
  }
];
db.createCollection("API_category");
db.API_category.insert(data);

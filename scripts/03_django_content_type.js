data = [{
    "_id": new ObjectId("65c0976007000578c571a419"),
    "id": 1,
    "app_label": "API",
    "model": "category"
  },
  {
    "_id": new ObjectId("65c0976007000578c571a41a"),
    "id": 2,
    "app_label": "API",
    "model": "activity"
  },
  {
    "_id": new ObjectId("65c0976007000578c571a41b"),
    "id": 3,
    "app_label": "API",
    "model": "user"
  },
  {
    "_id": new ObjectId("65c0976007000578c571a428"),
    "id": 4,
    "app_label": "admin",
    "model": "logentry"
  },
  {
    "_id": new ObjectId("65c0976007000578c571a42d"),
    "id": 5,
    "app_label": "auth",
    "model": "permission"
  },
  {
    "_id": new ObjectId("65c0976007000578c571a42e"),
    "id": 6,
    "app_label": "auth",
    "model": "group"
  },
  {
    "_id": new ObjectId("65c0976007000578c571a437"),
    "id": 7,
    "app_label": "contenttypes",
    "model": "contenttype"
  },
  {
    "_id": new ObjectId("65c0976007000578c571a43c"),
    "id": 8,
    "app_label": "sessions",
    "model": "session"
  }];
db.createCollection("django_content_type");
db.getCollection('django_content_type').insertMany(data);
  
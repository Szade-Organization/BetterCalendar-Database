data = [{
    "_id": new ObjectId("65c0975dbc6cb0f464b10e61"),
    "name": "django_migrations",
    "auto": {
      "field_names": [
        "id"
      ],
      "seq": 24
    },
    "fields": {
      "app": {
        "type_code": "string"
      },
      "applied": {
        "type_code": "date"
      },
      "id": {
        "type_code": "long"
      },
      "name": {
        "type_code": "string"
      }
    }
  },
  {
    "_id": new ObjectId("65c0975dbc6cb0f464b10e66"),
    "name": "django_content_type",
    "auto": {
      "field_names": [
        "id"
      ],
      "seq": 8
    },
    "fields": {
      "app_label": {
        "type_code": "string"
      },
      "id": {
        "type_code": "int"
      },
      "model": {
        "type_code": "string"
      }
    }
  },
  {
    "_id": new ObjectId("65c0975dbc6cb0f464b10e75"),
    "name": "auth_permission",
    "auto": {
      "field_names": [
        "id"
      ],
      "seq": 32
    },
    "fields": {
      "codename": {
        "type_code": "string"
      },
      "content_type_id": {
        "type_code": "int"
      },
      "id": {
        "type_code": "int"
      },
      "name": {
        "type_code": "string"
      }
    }
  },
  {
    "_id": new ObjectId("65c0975dbc6cb0f464b10e7b"),
    "name": "auth_group",
    "auto": {
      "field_names": [
        "id"
      ],
      "seq": 0
    },
    "fields": {
      "id": {
        "type_code": "int"
      },
      "name": {
        "type_code": "string"
      }
    }
  },
  {
    "_id": new ObjectId("65c0975ebc6cb0f464b10e80"),
    "name": "auth_group_permissions",
    "auto": {
      "field_names": [
        "id"
      ],
      "seq": 0
    },
    "fields": {
      "group_id": {
        "type_code": "int"
      },
      "id": {
        "type_code": "long"
      },
      "permission_id": {
        "type_code": "int"
      }
    }
  },
  {
    "_id": new ObjectId("65c0975ebc6cb0f464b10eae"),
    "name": "API_category",
    "auto": {
      "field_names": [
        "id"
      ],
      "seq": 5
    },
    "fields": {
      "color": {
        "type_code": "string"
      },
      "id": {
        "type_code": "long"
      },
      "name": {
        "type_code": "string"
      },
      "date_created": {
        "type_code": "date"
      },
      "date_modified": {
        "type_code": "date"
      },
      "description": {
        "type_code": null
      },
      "icon": {
        "type_code": null
      },
      "importance_level": {
        "type_code": null
      },
      "user_id": {
        "type_code": "long"
      }
    }
  },
  {
    "_id": new ObjectId("65c0975ebc6cb0f464b10eb3"),
    "name": "API_location",
    "auto": {
      "field_names": [
        "id"
      ],
      "seq": 0
    },
    "fields": {
      "coordinates": {
        "type_code": "string"
      },
      "id": {
        "type_code": "long"
      },
      "name": {
        "type_code": "string"
      }
    }
  },
  {
    "_id": new ObjectId("65c0975ebc6cb0f464b10eb8"),
    "name": "API_userdata",
    "auto": {
      "field_names": [
        "id"
      ],
      "seq": 0
    },
    "fields": {
      "e_mail": {
        "type_code": "string"
      },
      "id": {
        "type_code": "long"
      },
      "user_name": {
        "type_code": "string"
      }
    }
  },
  {
    "_id": new ObjectId("65c0975ebc6cb0f464b10ec0"),
    "name": "API_activity",
    "auto": {
      "field_names": [
        "id"
      ],
      "seq": 100
    },
    "fields": {
      "date_created": {
        "type_code": "date"
      },
      "date_end": {
        "type_code": "date"
      },
      "date_modified": {
        "type_code": "date"
      },
      "date_start": {
        "type_code": "date"
      },
      "description": {
        "type_code": "string"
      },
      "id": {
        "type_code": "long"
      },
      "importance_level": {
        "type_code": "string"
      },
      "length": {
        "type_code": "long"
      },
      "name": {
        "type_code": "string"
      },
      "category_id": {
        "type_code": "long"
      },
      "user_id": {
        "type_code": "long"
      }
    }
  },
  {
    "_id": new ObjectId("65c0975ebc6cb0f464b10ec6"),
    "name": "API_user",
    "auto": {
      "field_names": [
        "id"
      ],
      "seq": 10
    },
    "fields": {
      "date_joined": {
        "type_code": "date"
      },
      "email": {
        "type_code": "string"
      },
      "first_name": {
        "type_code": "string"
      },
      "id": {
        "type_code": "long"
      },
      "is_active": {
        "type_code": "bool"
      },
      "is_staff": {
        "type_code": "bool"
      },
      "is_superuser": {
        "type_code": "bool"
      },
      "last_login": {
        "type_code": "date"
      },
      "last_name": {
        "type_code": "string"
      },
      "password": {
        "type_code": "string"
      },
      "username": {
        "type_code": "string"
      }
    }
  },
  {
    "_id": new ObjectId("65c0975ebc6cb0f464b10ecb"),
    "name": "API_user_groups",
    "auto": {
      "field_names": [
        "id"
      ],
      "seq": 0
    },
    "fields": {
      "group_id": {
        "type_code": "int"
      },
      "id": {
        "type_code": "long"
      },
      "user_id": {
        "type_code": "long"
      }
    }
  },
  {
    "_id": new ObjectId("65c0975fbc6cb0f464b10ed0"),
    "name": "API_user_user_permissions",
    "auto": {
      "field_names": [
        "id"
      ],
      "seq": 0
    },
    "fields": {
      "id": {
        "type_code": "long"
      },
      "permission_id": {
        "type_code": "int"
      },
      "user_id": {
        "type_code": "long"
      }
    }
  },
  {
    "_id": new ObjectId("65c0975fbc6cb0f464b10f03"),
    "name": "django_admin_log",
    "auto": {
      "field_names": [
        "id"
      ],
      "seq": 0
    },
    "fields": {
      "action_flag": {
        "type_code": "int"
      },
      "action_time": {
        "type_code": "date"
      },
      "change_message": {
        "type_code": "string"
      },
      "content_type_id": {
        "type_code": "int"
      },
      "id": {
        "type_code": "int"
      },
      "object_id": {
        "type_code": "string"
      },
      "object_repr": {
        "type_code": "string"
      },
      "user_id": {
        "type_code": "long"
      }
    }
  },
  {
    "_id": new ObjectId("65c09760bc6cb0f464b10f13"),
    "name": "django_session",
    "fields": {
      "expire_date": {
        "type_code": "date"
      },
      "session_data": {
        "type_code": "string"
      },
      "session_key": {
        "type_code": "string"
      }
    }
  }];
  db.createCollection("__schema__");
  db.__schema__.insertMany(data);
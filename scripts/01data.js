// django_session
db.createCollection("django_session");
fetch('./bettercalendar.django_session.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    db.django_session.insertMany(data);
});

// django_migrations
db.createCollection("django_migrations");
fetch('./bettercalendar.django_migrations.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    db.django_migrations.insertMany(data);
});

// django_content_type
db.createCollection("django_content_type");
fetch('./bettercalendar.django_content_type.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    db.django_content_type.insertMany(data);
});

// django_admin_log
db.createCollection("django_admin_log");
fetch('./bettercalendar.django_admin_log.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    db.django_admin_log.insertMany(data);
});

// auth_permission
db.createCollection("auth_permission");
fetch('./bettercalendar.auth_permission.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    db.auth_permission.insertMany(data);
});

// auth_group_permissions
db.createCollection("auth_group_permissions");
fetch('./bettercalendar.auth_group_permissions.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    db.auth_group_permissions.insertMany(data);
});

// auth_group
db.createCollection("auth_group");
fetch('./bettercalendar.auth_group.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    db.auth_group.insertMany(data);
});

// __schema__
db.createCollection("__schema__");
fetch('./bettercalendar.__schema__.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    db.__schema__.insertMany(data);
});

// API_user_user_permissions
db.createCollection("API_user_user_permissions");
fetch('./bettercalendar.API_user_user_permissions.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    db.API_user_user_permissions.insertMany(data);
});

// API_user_groups
db.createCollection("API_user_groups");
fetch('./bettercalendar.API_user_groups.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    db.API_user_groups.insertMany(data);
});

// API_category
db.createCollection("API_category");
fetch('./bettercalendar.API_category.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    db.API_category.insertMany(data);
});

// API_activity
db.createCollection("API_activity");
fetch('./bettercalendar.API_activity.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    db.API_activity.insertMany(data);
});
// django_session
const django_session = require('./bettercalendar.django_session.json');
db.createCollection("django_session");
db.django_session.insertMany(django_session);

// django_migrations
const django_migrations = require('./bettercalendar.django_migrations.json');
db.createCollection("django_migrations");
db.django_migrations.insertMany(django_migrations);

// django_content_type
const django_content_type = require('./bettercalendar.django_content_type.json');
db.createCollection("django_content_type");
db.django_content_type.insertMany(django_content_type);

// django_admin_log
const django_admin_log = require('./bettercalendar.django_admin_log.json');
db.createCollection("django_admin_log");
db.django_admin_log.insertMany(django_admin_log);

// auth_permission
const auth_permission = require('./bettercalendar.auth_permission.json');
db.createCollection("auth_permission");
db.auth_permission.insertMany(auth_permission);

// auth_group_permissions
const auth_group_permissions = require('./bettercalendar.auth_group_permissions.json');
db.createCollection("auth_group_permissions");
db.auth_group_permissions.insertMany(auth_group_permissions);

// auth_group
const auth_group = require('./bettercalendar.auth_group.json');
db.createCollection("auth_group");
db.auth_group.insertMany(auth_group);

// __schema__
const __schema__ = require('./bettercalendar.__schema__.json');
db.createCollection("__schema__");
db.__schema__.insertMany(__schema__);

// API_user_user_permissions
const API_user_user_permissions = require('./bettercalendar.API_user_user_permissions.json');
db.createCollection("API_user_user_permissions");
db.API_user_user_permissions.insertMany(API_user_user_permissions);

// API_user_groups
const API_user_groups = require('./bettercalendar.API_user_groups.json');
db.createCollection("API_user_groups");
db.API_user_groups.insertMany(API_user_groups);

// API_user
const API_user = require('./bettercalendar.API_user.json');
db.createCollection("API_user");
db.API_user.insertMany(API_user);

// API_category
const API_category = require('./bettercalendar.API_category.json');
db.createCollection("API_category");
db.API_category.insertMany(API_category);

// API_activity
const API_activity = require('./bettercalendar.API_activity.json');
db.createCollection("API_activity");
db.API_activity.insertMany(API_activity);
// django_session
import django_session from './bettercalendar.django_session.json';
db.createCollection("django_session");
db.django_session.insertMany(django_session);

// django_migrations
import django_migrations from './bettercalendar.django_migrations.json';
db.createCollection("django_migrations");
db.django_migrations.insertMany(django_migrations);

// django_content_type
import django_content_type from './bettercalendar.django_content_type.json';
db.createCollection("django_content_type");
db.django_content_type.insertMany(django_content_type);

// django_admin_log
import django_admin_log from './bettercalendar.django_admin_log.json';
db.createCollection("django_admin_log");
db.django_admin_log.insertMany(django_admin_log);

// auth_permission
import auth_permission from './bettercalendar.auth_permission.json';
db.createCollection("auth_permission");
db.auth_permission.insertMany(auth_permission);

// auth_group_permissions
import auth_group_permissions from './bettercalendar.auth_group_permissions.json';
db.createCollection("auth_group_permissions");
db.auth_group_permissions.insertMany(auth_group_permissions);

// auth_group
import auth_group from './bettercalendar.auth_group.json';
db.createCollection("auth_group");
db.auth_group.insertMany(auth_group);

// __schema__
import __schema__ from './bettercalendar.__schema__.json';
db.createCollection("__schema__");
db.__schema__.insertMany(__schema__);

// API_user_user_permissions
import API_user_user_permissions from './bettercalendar.API_user_user_permissions.json';
db.createCollection("API_user_user_permissions");
db.API_user_user_permissions.insertMany(API_user_user_permissions);

// API_user_groups
import API_user_groups from './bettercalendar.API_user_groups.json';
db.createCollection("API_user_groups");
db.API_user_groups.insertMany(API_user_groups);

// API_category
import API_category from './bettercalendar.API_category.json';
db.createCollection("API_category");
db.API_category.insertMany(API_category);

// API_activity
import API_activity from './bettercalendar.API_activity.json';
db.createCollection("API_activity");
db.API_activity.insertMany(API_activity);
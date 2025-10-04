# Database

## How Your Database Works

When you ask the AI to build your application, it creates a dedicated database to store your data — whether that's blog posts, user profiles, product catalogs, or any other information your app needs. This database is completely isolated from other projects and automatically configured with security and tracking features.

Your database is replicated globally, providing fast, reliable data storage with automatic backups. The AI manages all the technical details: creating tables, setting up relationships between data, configuring security rules, and ensuring everything works together seamlessly.

**What you get automatically**:
- **Complete isolation** - Your data is separated from all other projects
- **Automatic backups** - Data is continuously backed up and protected
- **Security enforcement** - Access control is automatically applied to every query
- **Audit trails** - All changes are tracked with timestamps and user information
- **Fast performance** - The database distributes your data globally for low latency
- **Visual admin tools** - Browse, search, edit, and export your data through the UI

## Automatic Data Tracking

Every table the AI creates automatically includes five special columns that provide security, audit trails, and data integrity without you having to think about them:

### `_row_id` - Unique Identifier

Each record gets a unique ID that never changes. The AI uses this to link related data together (like connecting blog posts to their authors) and to update specific records. You don't need to create your own ID columns — the system handles this automatically.

### `_created_by` - User Tracking

Every time a user creates a record, the system automatically stamps it with their user ID. This enables features like "show me only my posts" or "only the author can edit this." The AI uses this for security rules to ensure users can only access or modify their own data when appropriate.

### `_created_at` - Creation Date

Records when data was created, stored as a timestamp. This lets you sort by newest first, show "posted 2 days ago" labels, or filter to recent activity. The timestamp is automatically set and never changes.

### `_updated_at` - Last Modified

Automatically updated every time a record changes. This is useful for showing "last edited" information, implementing caching strategies, or tracking recent activity. The system handles this completely automatically — you never have to manually update it.

### `_deleted` - Soft Delete

When users delete data, records aren't actually removed from the database — they're just marked as deleted. This means you can recover accidentally deleted data, maintain audit trails, and never lose historical information. Deleted records are automatically hidden from all queries but remain accessible if needed for recovery or compliance.

## How the AI Creates and Updates Your Database

When you tell the AI what kind of data your app needs, it creates the appropriate database tables behind the scenes. This process uses a migration system that tracks every change to your database structure, making it possible to update, rollback, or understand what changed over time.

**What happens automatically**:

When you ask for something like "create a blog where users can write posts," the AI:

1. **Designs the table structure** - Determines what fields are needed (title, content, publish date, etc.)
2. **Adds the tracking columns** - Includes `_row_id`, `_created_by`, `_created_at`, `_updated_at`, and `_deleted`
3. **Creates performance indexes** - Adds database indexes so queries run fast
4. **Sets up relationships** - Links tables together (like connecting posts to authors)
5. **Applies the changes** - Creates the table in your database
6. **Configures security** - Sets up access control rules (covered below)
7. **Records the change** - Saves a record of what was created for audit and rollback purposes

**Data relationships**:

The AI automatically manages relationships between your data. For example:
- **One-to-many**: Each user can have many blog posts
- **Many-to-many**: Each post can have many tags, and each tag can apply to many posts
- **Required fields**: Email addresses that must exist
- **Unique values**: Usernames that can't be duplicated
- **Validation rules**: Prices that can't be negative

All of this is set up automatically when you describe what your application needs to do.

## Automatic Security and Access Control

Your data is automatically protected by row-level security (RLS) — a system that controls exactly who can see and modify each piece of data. When you describe your application to the AI, it sets up appropriate security rules based on what you're building.

For example, if you say "users should only see their own notes," the AI configures rules ensuring each user can only access records they created. If you say "make blog posts public but only editable by the author," it sets that up automatically. The security is enforced at the database level, meaning there's no way to bypass it — even if someone tried to access the API directly.

### Security Rule Types

The AI can configure nine different types of security rules, which can be combined to create sophisticated access control:

**1. Public Access**

Anyone can view this data, even without logging in. Perfect for marketing content, product catalogs, public blog posts, or FAQ sections.

**2. Authenticated Users**

Only logged-in users can access the data. Ideal for user-generated content, community features, internal dashboards, or any content meant for members only.

**3. Owner Only**

Only the person who created a record can see or modify it. Perfect for personal notes, private documents, user preferences, shopping carts, or any data that should be completely private to each user.

**4. Same Organization**

Users can access data from their own organization but not other organizations. Great for team documents, company-wide announcements, shared project data, or department resources. Each organization sees only their own data.

**5. Primary Organization**

Access restricted to users from your internal team (the primary organization), not your app's customers. This is useful for system configuration, admin dashboards, billing management, feature flags, internal analytics, or audit logs that only you should see.

**Platform context**: When customers sign up for your app, they get their own organizations. This rule ensures they can't access your internal administrative data.

**6. User Has Attribute**

Access based on specific user attributes, like being in the "admin" group. Used for admin-only tables, role-based content, feature flags, or beta access.

**7. Record Has Value**

Access based on a specific field value in the record itself. For example, only show records where `status = "published"`. Great for published vs. draft content, active vs. archived data, or approval workflows.

**8. Field Matching**

Match user attributes to record fields. For instance, users can only see records where the record's `department` matches their `department`. Perfect for department-based access, location-based filtering, territory management, or custom segmentation.

**9. Block All Access**

Completely prevents an operation. Useful to prevent deletes on audit tables, create read-only reference data, implement append-only logs, or ensure certain records can never be modified.

### How Rules Are Applied

Security rules can be set separately for each type of database operation:

- **Reading data (SELECT)** - Who can view records
- **Creating data (INSERT)** - Who can add new records
- **Updating data (UPDATE)** - Who can modify existing records
- **Deleting data (DELETE)** - Who can remove records

The AI can combine multiple rules with OR logic. For example, "records can be viewed by the owner OR anyone in the same organization" gives flexible access while maintaining security.

### Real-World Examples

**Personal Todo App**:
The AI sets up "Owner Only" rules so each user only sees their own tasks. When you create a task, only you can see, edit, or delete it.

**Company Blog**:
Published posts are "Public" for reading, but only "Authenticated" users (your team) can create new posts, and only the "Owner" (post author) can edit or delete them.

**Multi-Tenant SaaS**:
The AI uses "Same Organization" rules so Company A's users can't see Company B's data. Your internal team uses "Primary Organization" rules to access administrative features that customers shouldn't see.

**Department Resources**:
"Field Matching" rules ensure sales reps only see sales materials, engineering sees engineering docs, etc., based on department attributes automatically.

## Accessing Your Data

You can work with your database in three ways:

### 1. Admin Interface

The visual admin interface lets you browse, search, edit, and export your data through a spreadsheet-like interface. You can filter data, sort columns, edit records inline, and export to CSV or JSON. The interface automatically generates forms based on your table structure, validates data according to your rules, and handles relationships between tables.

### 2. From Your Application

Your frontend application can query the database directly through a REST API that the AI automatically configures. The API uses PostgREST-compatible syntax, which is a widely-adopted standard for database APIs. All the security rules you've set up are automatically enforced — users can only access data they're supposed to see.

### 3. Through Edge Functions

Edge functions (server-side code) can access your database with full power while still respecting security rules. The AI creates these functions when you need to implement complex business logic, integrate with external services, or perform operations that shouldn't run in the browser.

## Best Practices

✅ **Let the AI handle structure** - Describe what you need and let the AI create the tables. Don't worry about technical database details.

✅ **Use descriptive names** - When talking to the AI, use clear names for your data (like "blog post" rather than "item" or "thing").

✅ **Leverage automatic features** - The AI sets up relationships, validation, and security automatically. Trust these systems rather than trying to build your own.

❌ **Don't override defaults** - The automatic ID columns, timestamps, and soft deletes are there for good reasons. Let them work.

❌ **Don't skip security** - Always describe who should be able to see and modify your data when creating new features.

---

**Related Documentation:**
- [Secrets Management →](/cloud/secrets)
- [Edge Functions →](/cloud/functions)
- [Admin Interface →](/cloud/admin)

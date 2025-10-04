# Admin Interface

## Managing Your Backend Visually

The admin interface provides comprehensive tools to view, manage, and monitor every aspect of your backend without writing code.

## Database Management

**Browse all tables** and see record counts at a glance. The interface shows you every table in your database with a count of how many records each contains.

**View and edit data** through a spreadsheet-like grid. Click on any table to see its data in an intuitive table view where you can edit records inline, add new ones, or delete existing ones.

**Filter, sort, search, and export data**. Find exactly what you're looking for with powerful filtering tools, sort by any column, search across all fields, and export to CSV or JSON.

**See table relationships and foreign keys**. The interface visualizes how your tables are connected, making it easy to understand your data structure.

**View security policies** configured on each table. See exactly who can read, create, update, or delete records in each table.

**Execute read-only SQL queries** for advanced analysis when you need more complex data exploration.

## Functions Management

**View all your edge functions** and when they were last called. See a complete list of all server-side functions in your project with execution statistics.

**See function code and access policies**. Review the JavaScript code for each function and understand who can call it.

**Review execution logs** with timing and error information. Every function call is logged so you can track performance, debug issues, and understand usage patterns.

**Test functions** with different inputs. Try out your functions directly from the admin interface to ensure they work as expected.

**Monitor function performance and error rates**. Track how often functions are called, how long they take, and whether they're encountering errors.

## Secrets Management

**View all stored secrets** with masked values. See every secret in your project, but only the first and last few characters are visible for security.

**Add new secrets or update existing ones**. Easily add API keys and credentials when you need to integrate new services.

**See when secrets were created or modified**. Track the history of your secrets to understand when they were added or changed.

**Delete unused secrets**. Clean up old credentials that are no longer needed to maintain good security hygiene.

## Monitoring and Insights

**Database size and storage usage**: Track how much data your application is storing and plan for growth.

**Function execution statistics**: See which functions are called most often, how long they take, and error rates.

**API request metrics**: Monitor how your application is being used through API statistics.

**Error rates and recent failures**: Quickly identify and debug issues by seeing recent errors.

**User activity and access patterns**: Understand how users are interacting with your application.

## Security and Access

The admin interface itself respects your project's access control rules. Depending on your permissions, you can view data, make changes, or access administrative features. All actions are logged for audit purposes.

## Accessing the Admin Interface

The admin interface is available directly from your Kliv project. Click the admin button to access all management tools for your backend.

---

**Related Documentation:**
- [Database →](/cloud/database)
- [Secrets Management →](/cloud/secrets)
- [Edge Functions →](/cloud/functions)

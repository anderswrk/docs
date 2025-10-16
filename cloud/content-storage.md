# File Storage and Content Management

Your application has a dedicated content filesystem for storing user-uploaded files like images, documents, PDFs, and videos. This is separate from your application code and is designed for dynamic content that users create or upload while using your app.

## What the Content Filesystem Enables

The content filesystem provides powerful file management capabilities for your application:

- **Store user avatars, profile photos, and image galleries**
- **Accept document uploads** like resumes, contracts, or PDFs
- **Build file-sharing features** between users in your app
- **Create image-heavy applications** with automatic optimization
- **Let users download files** they've uploaded or that belong to them
- **Build administrative tools** where you manage files on behalf of users

## How It Works

When you describe a feature that needs file storage to the AI, it automatically handles the entire implementation:

**Sets up the upload interface** — Creates forms or drag-and-drop zones where users can select files from their device

**Configures access control** — Determines who can view, upload, or delete files based on what you're building

**Implements image optimization** — Automatically resizes and serves images efficiently so your app loads fast

**Creates the storage structure** — Organizes files into logical folders like `/content/uploads/` or `/content/avatars/`

**Handles the backend** — Manages the actual file storage, retrieval, and delivery without you needing to think about it

Files are stored at paths like `/content/uploads/photo.jpg` and can be referenced directly in your app. The system tracks who uploaded each file, when it was created, and enforces your access rules.

## Access Control for Files

Just like database tables and edge functions, files have security policies that control who can access them. **Files are private by default** — nobody can access them until you configure permissions. The AI sets these up based on what you're building:

### Public Files

Anyone can view them, even without logging in. Logged-in users can upload, and only the person who uploaded a file can delete it. Perfect for photo galleries, public image sharing, or user-generated content sites.

### Private Files

Only the user who uploaded a file can view or delete it. Used for sensitive documents, private photos, medical records, or anything users wouldn't want others to see.

### Organization-Shared Files

Users from the same organization can view files uploaded by anyone in their org. Individuals can only delete files they uploaded. Great for team document sharing, company resources, or collaborative workspaces.

### Owner-Only Access

Only you (the app creator) can access these files, not your end users. Useful for storing system files, templates, or administrative resources that power your app but shouldn't be user-facing.

### Advanced Access Control

The AI can create sophisticated access rules based on file metadata. For example:

- Published articles are public, but drafts are only visible to the author
- Files tagged with a department are only visible to users in that department
- Premium content requires a subscription flag on the user's account
- Shared files are visible to collaborators listed in the file's metadata

## Image Optimization

Images uploaded to the content filesystem are automatically optimized for fast loading. When you display an image, you can request a specific width and the system handles the rest:

```html
<!-- Thumbnail (200px wide) -->
<img src="/content/gallery/photo.jpg?w=200" />

<!-- Standard display (800px wide) -->
<img src="/content/gallery/photo.jpg?w=800" />

<!-- Hero image (1920px wide) -->
<img src="/content/gallery/photo.jpg?w=1920" />

<!-- Original, full-size image -->
<img src="/content/gallery/photo.jpg" />
```

### How Optimization Works

**Progressive loading** — The first time someone requests an optimized size, the system serves the closest available version and generates the exact size in the background. Every request after that gets the perfectly-sized, optimized image. The original file is always preserved.

**Modern format delivery** — The system automatically serves modern image formats (AVIF or WebP) to browsers that support them, with automatic fallback to JPEG or PNG for older browsers. This happens transparently — you just specify the width, and users get the fastest-loading version their browser can handle.

**Performance optimization** — Use smaller widths to improve performance. A 200px thumbnail loads much faster than the original 4000px image and uses less bandwidth. Choose the width that matches how you're displaying the image.

## Using Files in Your Application

The AI integrates the content filesystem into your React application automatically. When you ask for features that involve files, it creates the UI components, hooks up the upload/download logic, and handles errors.

### Common Patterns the AI Implements

**Avatar Upload** — A profile photo upload interface that validates image types, shows upload progress, previews the image, and saves the path to the user's profile.

**Document Gallery** — A file browser that lists uploaded documents, shows thumbnails for images, provides download links, and allows filtering or searching.

**Drag-and-Drop Upload** — An intuitive upload zone where users can drag files from their desktop, see upload progress, cancel uploads in progress, and get error messages for invalid files.

**File Picker** — A modal or sidebar that shows files the user has previously uploaded, allows them to select one for reuse, and displays thumbnails and filenames.

## Edge Function Integration

Edge functions (your server-side code) can access the content filesystem to process files, generate files programmatically, or implement custom file-handling logic.

### What Edge Functions Can Do with Files

- Generate PDF reports and save them for users to download
- Process uploaded images (apply watermarks, create thumbnails, extract metadata)
- Scan uploaded documents for sensitive data before accepting them
- Implement custom backup or archival logic
- Analyze file contents and extract structured data
- Trigger workflows when specific files are uploaded

::: warning Important Security Note
Edge functions bypass normal access control. When your function accesses files, it's not limited by the "public" or "owner" rules that apply to users. This means you must implement your own authorization checks in the function code to ensure users can only access files they should see.

For example, if a user calls your function requesting a file, you need to verify they own that file or have permission to access it before returning the contents. The AI handles this when building your functions, but it's important to understand that function code runs with elevated privileges.
:::

## Storage Organization

The AI organizes files into logical folders based on what you're building. You don't need to create folder structures manually — just describe what you need, and the AI sets up appropriate paths.

### Common Organization Patterns

- `/content/uploads/` — General user uploads
- `/content/avatars/` — User profile photos
- `/content/documents/` — PDFs and documents
- `/content/gallery/` — Photo gallery images
- `/content/private/` — Private user files
- `/content/public/` — Publicly accessible files
- `/content/temp/` — Temporary files that can be deleted

The AI can create nested folders like `/content/uploads/2024/` or `/content/users/[username]/` when appropriate for your use case. Files are tracked by their full path, so moving or renaming files updates all references automatically.

## Monitoring and Debugging

All file operations are logged — uploads, downloads, access denials, and errors. You can view these logs in the admin interface to understand how your file storage is being used:

- See which files are uploaded most frequently
- Identify failed uploads and what went wrong
- Track download patterns and popular files
- Monitor storage usage and growth over time
- Debug access control issues when users can't access files they expect to see

The system also tracks storage metrics — total files stored, total size, growth rate, and largest files. This helps you understand your app's storage footprint and plan for scaling.

## Limits and Constraints

By default, individual files can be up to **500MB**. This is configurable — the AI can adjust the limit based on what you're building. For most applications (image uploads, document sharing, PDFs), the default limit is more than sufficient.

Files are stored redundantly for reliability. If you delete a file, it's permanently removed from the system — there's no trash or recycle bin, so deletion is immediate and final.

## Working with the AI

When describing features that need file storage, be specific about:

- **Who can access the files** — Public, private, organization-shared, or custom rules
- **What types of files** — Images only, PDFs, any file type, size limits
- **How files are organized** — Folders, naming conventions, whether users can create subfolders
- **What happens after upload** — Display in a gallery, attach to a record, process with a function

The AI uses this information to configure the storage correctly, set up access policies, and create an interface that matches your needs.

---

**Related Documentation:**
- [Database →](/cloud/database)
- [Edge Functions →](/cloud/functions)
- [Admin Interface →](/cloud/admin)

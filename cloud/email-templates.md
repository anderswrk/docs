# Email Templates

## Managing Email Content

Email templates let you create consistent, professional-looking emails with dynamic content. Rather than writing email HTML and text every time you want to send a message, you create reusable templates that the AI can use to send emails on your behalf.

Templates are written in Markdown — the same simple formatting language used for blog posts and documentation — and automatically converted to clean HTML when sent. This means your emails look professional without requiring you to write complex HTML code.

## How Templates Work

When you tell the AI you want to send certain types of emails (like welcome messages, password resets, or order confirmations), it creates appropriate email templates automatically. Each template includes:

**Subject line**: What appears in the email subject, which can include dynamic information like the user's name

**Body content**: The email message, formatted in Markdown for headings, bold text, links, and other formatting

**Variables**: Placeholders that get replaced with actual information when the email is sent, like `$firstName`, `$lastName`, `$email`, or `$timestamp`

**Template type**: Whether it's a system email (password reset), transactional email (receipt), or marketing email (newsletter)

## Variables and Personalization

Templates use simple variables that automatically get replaced with real information when emails are sent. For example:

A template might say: "Hello $firstName, welcome to our service! Your account email is $email."

When sent to a user named Sarah Johnson with email sarah@example.com, it becomes: "Hello Sarah, welcome to our service! Your account email is sarah@example.com."

**Standard variables available**:
- `$firstName` - The recipient's first name
- `$lastName` - The recipient's last name
- `$email` - The recipient's email address
- `$timestamp` - When the email was sent

The AI can also add custom variables specific to your application, like order numbers, confirmation codes, or any other information that should appear in emails.

## Template Types

### System Templates
Critical emails for your application's operation: password resets, email verification, account activation, security alerts. These are created and managed by the AI to ensure they follow best practices and maintain consistency.

### Transactional Templates
Emails triggered by user actions: order confirmations, shipping notifications, receipts, password change confirmations. These provide users with important information about their interactions with your application.

### Marketing Templates
Newsletters, announcements, promotional emails, product updates. These are for communicating with your users about new features, offers, or content.

## Creating and Managing Templates

### Through the AI
When you describe email needs, the AI creates appropriate templates. For example, "Send users a welcome email when they sign up" prompts the AI to create a welcome template with appropriate content and variables.

### Through the Admin Interface
You can view all templates, see their content, edit subject lines and body text, and enable or disable templates. The interface provides a Markdown editor with preview functionality.

### Automatic Features
- **Markdown rendering** - Your Markdown is automatically converted to clean, responsive HTML
- **Security protection** - Variables are automatically escaped to prevent security issues
- **Template validation** - The system verifies templates before they're saved
- **Version tracking** - Changes to templates are tracked with timestamps and user information

## Real-World Examples

### User Registration
When someone signs up, the AI uses a welcome template to send a branded email with their name, account details, and next steps. The email looks professional and consistent with your brand.

### Password Reset
When users forget passwords, a system template sends them a secure reset link. The template includes their name, explains what happened, and provides clear instructions.

### Order Confirmation
After a purchase, a transactional template emails a receipt with order details, item list, total amount, and shipping information — all populated automatically from your database.

### Weekly Newsletter
A marketing template sends updates about new features or content, personalized with each recipient's name and preferences.

## Security and Safety

**XSS Protection**: All variables are automatically escaped when emails are sent, preventing injection attacks. You don't need to worry about malicious content in user-submitted data — the system handles sanitization automatically.

**Preview before send**: The admin interface lets you preview how templates will look with sample data before using them in your application.

**Validation**: The system checks that all variables in templates are valid and that the Markdown syntax is correct before allowing templates to be saved.

## Best Practices

✅ **Use templates** - Let the AI create email templates rather than hardcoding email content in your application.

✅ **Personalize with variables** - Use `$firstName` and other variables to make emails feel personal and relevant.

✅ **Preview before sending** - Always preview templates with sample data to ensure they look correct.

✅ **Keep it simple** - Use Markdown formatting for clarity. Avoid overly complex layouts.

❌ **Don't hardcode email content** - Templates let you update email content without code changes and maintain consistency.

❌ **Don't put sensitive data in templates** - Use variables for dynamic content rather than embedding specific user data.

---

**Related Documentation:**
- [Email Delivery →](/cloud/email-delivery)
- [Database →](/cloud/database)
- [Admin Interface →](/cloud/admin)

# Edge Functions

## Server-Side Code Execution

Edge functions are JavaScript functions that run on the server, enabling you to implement logic that shouldn't or can't run in the browser. The AI creates these functions when you describe features that need server-side processing, external API integration, or enhanced security.

**What edge functions enable**:
- **Process forms** with validation and external API calls
- **Integrate services** like sending emails, processing payments, or calling AI APIs
- **Protect sensitive logic** that shouldn't be visible in browser code
- **Access secrets** securely without exposing them to users
- **Perform complex operations** that are too slow or resource-intensive for the browser

## How Functions Work

When the AI creates an edge function for you, it:

1. **Writes the JavaScript code** to perform the task you described
2. **Sets up access control** to determine who can call the function
3. **Configures secrets access** if the function needs external API credentials
4. **Tests the function** to ensure it works correctly
5. **Provides a URL** your application can call to execute the function

Functions run in isolated, secure environments. Each execution is logged with timing information, any errors, and what user triggered it. You can view these logs in the admin interface to monitor how your functions are performing and debug any issues.

## Access Control for Functions

Just like database tables, edge functions have security policies that control who can execute them. The AI sets these up based on what you're building:

### Public Functions

Anyone can call them, even without logging in. Used for webhook handlers (like Stripe payment notifications), public APIs, or health check endpoints.

### Authenticated Functions

Only logged-in users can call them. Most functions use this policy — it's appropriate for user-facing features, form submissions, or data fetching for your application.

### Group-Based Access

Only users in specific groups (like "admin") can call the function. Perfect for administrative operations, moderation tools, or team-specific features.

### Metadata-Based Access

Access based on custom user attributes. For example, only users with `department = "engineering"` can call certain functions. This enables flexible, custom permission schemes.

## What Functions Can Do

### Database Access

Functions can query and modify your database, with all the same security rules applied. They can create, read, update, or delete records while respecting row-level security.

### External API Calls

Functions can communicate with external services using your stored secrets. The AI includes the necessary authentication and request formatting.

### Complex Logic

Functions can perform calculations, data transformations, validations, or multi-step workflows that are too complex for the browser.

### Email and Notifications

Send transactional emails, SMS messages, or push notifications in response to user actions.

### Payment Processing

Handle payment flows, webhook processing, or subscription management with services like Stripe.

### AI Integration

Call AI APIs like OpenAI or Anthropic to generate content, analyze data, or provide intelligent features.

## Example Scenarios

### Contact Form Processing

When a user submits a contact form, an edge function validates the input, stores it in the database, and sends an email notification to your team — all triggered by a single function call.

### AI Content Generation

When users request AI-generated content, a function calls the OpenAI or Anthropic API using your stored credentials, generates the content, stores it in the database, and returns it to the user.

### Payment Processing

Functions handle the entire payment flow: creating payment intents with Stripe, processing webhooks when payments complete, updating order status in the database, and sending confirmation emails.

### Data Export

An authenticated function queries the database, formats data as CSV or Excel, and returns it for download — all while respecting user permissions and security rules.

## Monitoring and Logs

Every function execution is automatically logged with:
- When it was called and by whom
- How long it took to execute
- Whether it succeeded or encountered errors
- Any console output or error messages
- The response it returned

These logs are available in the admin interface, making it easy to monitor function performance, debug issues, or understand how your application is being used.

## Best Practices

✅ **Describe clearly** - When asking the AI to create a function, be specific about what it should do and who should be able to call it.

✅ **Monitor logs** - Check function execution logs to understand performance and catch errors early.

✅ **Keep secrets in the secrets manager** - The AI will use stored secrets rather than hard-coding them in functions.

❌ **Don't expose sensitive operations** - Let the AI configure appropriate access controls. Administrative functions should never be public.

---

**Related Documentation:**
- [Database →](/cloud/database)
- [Secrets Management →](/cloud/secrets)
- [Admin Interface →](/cloud/admin)

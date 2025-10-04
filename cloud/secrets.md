# Secrets Management

## Secure Credential Storage

When your application needs to connect to external services — like sending emails through SendGrid, processing payments with Stripe, or using OpenAI for AI features — you need to securely store API keys and credentials. Kliv's secrets management system handles this automatically.

**What makes secrets secure**:
- **Encrypted storage** in the database
- **Never displayed** in full after you save them
- **Automatically injected** into edge functions when needed
- **Account-wide** so you only store each key once
- **Audit trails** tracking when secrets were created or updated

## How Secrets Work

When you tell the AI you want to integrate with an external service, it will ask for the necessary credentials. Once you provide an API key, the AI stores it securely with a descriptive name (like `OPENAI_API_KEY` or `STRIPE_SECRET_KEY`). From then on, any edge function that needs that credential can access it automatically.

**Masked display**: After saving a secret, you'll only see a partially masked version in the admin UI. For example, `sk-proj-abc123xyz789` appears as `sk-p****9789`. This lets you verify which key is which without exposing the full value.

**Automatic injection**: When an edge function runs, all your secrets are automatically available as environment variables. The AI includes the right secret in the function code, and the platform injects the actual value at runtime.

## Managing Secrets

Through the admin interface, you can:
- View all your secrets (with masked values)
- Add new secrets or update existing ones
- Delete secrets you no longer need
- See when each secret was created or last updated

The AI can also create and update secrets for you when you describe integrations you want to build.

## Common Uses for Secrets

- **Email services**: SendGrid, Mailgun, or SMTP credentials
- **Payment processing**: Stripe, PayPal, or other payment API keys
- **AI services**: OpenAI, Anthropic, or Google API keys
- **SMS/calling**: Twilio auth tokens
- **External APIs**: Any third-party service your app integrates with
- **Webhooks**: Signing secrets for verifying incoming webhooks
- **Database connections**: Connection strings for external databases

## Best Practices

✅ **Use descriptive names** - Name secrets clearly like `SENDGRID_API_KEY` rather than `key1` or `secret`.

✅ **Rotate regularly** - Update secrets periodically, especially for critical services.

✅ **Delete when done** - Remove secrets for services you're no longer using.

❌ **Don't share secrets** - Each environment (test, production) should use different API keys.

❌ **Don't commit to code** - Secrets are stored separately from your code for a reason. Never put API keys directly in your source files.

---

**Related Documentation:**
- [Database →](/cloud/database)
- [Edge Functions →](/cloud/functions)
- [Admin Interface →](/cloud/admin)

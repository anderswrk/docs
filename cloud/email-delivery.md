# Email Delivery

## Sending Emails from Your Application

Your application can send emails for user registration, password resets, notifications, receipts, or any other messaging needs. Kliv includes a complete email system with rate limiting, template management, and support for custom SMTP servers.

**Out of the box**, you can send emails immediately using default platform servers. However, like other platforms (such as Supabase), these defaults have strict rate limits — just 2 emails per day and 2 per hour — to prevent abuse. For production applications, you'll want to configure your own email service.

## Custom SMTP Configuration

When you set up your own SMTP server, your rate limits increase dramatically to 500 emails per day and 50 per hour by default, with the ability to configure even higher limits (up to 10,000 per day) as your needs grow.

**What you get with custom SMTP**:
- **Dramatically higher limits** - 500/day and 50/hour instead of 2/day and 2/hour
- **Your own sender address** - Emails come from your domain instead of generic addresses
- **Delivery tracking** - Better visibility into email delivery and bounces
- **Encrypted credentials** - Your SMTP password is encrypted and never displayed in full
- **Connection testing** - Verify your SMTP settings work before saving them
- **Automatic management** - The AI can configure SMTP settings when you provide credentials

## Setting Up Email Delivery

When you tell the AI you want to send emails, it will guide you through the setup process. You'll need credentials from an email service provider — companies that specialize in reliable email delivery. The AI can configure the connection automatically once you provide the necessary information.

**Common email service providers**:

### Gmail / Google Workspace
Great for small projects and teams already using Google services. Free tier available, though with daily sending limits. Requires app-specific password for security.

### SendGrid
Popular choice for transactional emails (receipts, notifications, password resets). Free tier includes 100 emails per day. Scales well for growing applications. Offers detailed delivery analytics.

### Mailgun
Developer-friendly service with excellent deliverability. Free tier provides 5,000 emails per month. Strong API and webhook support for tracking delivery status.

### Amazon SES (Simple Email Service)
Extremely cost-effective for high-volume sending (as low as $0.10 per thousand emails). Requires AWS account. Best for applications already using Amazon infrastructure.

### Postmark
Focuses specifically on transactional emails with excellent deliverability rates. Emphasis on speed and reliability. Detailed analytics and bounce handling.

### Mailchimp Transactional (formerly Mandrill)
Good option if you're already using Mailchimp for marketing emails. Reliable delivery with integration into Mailchimp's larger email platform.

### Resend
Modern email API designed specifically for developers. Clean interface, excellent documentation, generous free tier.

## How SMTP Configuration Works

Once you choose an email service provider and create an account with them, they'll give you connection details: a server address, port number, username, and password. When you tell the AI you want to set up email delivery and provide these details, it:

1. **Stores credentials securely** - Your password is encrypted in the database
2. **Configures connection settings** - Server address, port, encryption type (TLS/SSL)
3. **Tests the connection** - Verifies the settings work before saving them
4. **Sets rate limits** - Configures appropriate daily and hourly limits
5. **Updates sender information** - Sets your "from" address and display name

From that point forward, when your application sends emails, they go through your configured service rather than the default platform servers.

## Managing Email Settings

Through the admin interface, you can:
- View current SMTP configuration with masked credentials
- See email usage (how many sent this hour and today)
- Update sender information (from address, display name, reply-to address)
- Test your connection to verify settings
- Adjust rate limits based on your needs
- Reset to default platform servers if needed

The AI can also update these settings for you if you want to change providers or modify limits.

## Security and Privacy

**Encrypted storage**: Your SMTP password is encrypted in the database and never displayed in full after you save it. You'll see a masked version like `****xyz789` to verify which password is stored without exposing the full value.

**Connection security**: The system supports modern TLS encryption for secure communication with your email provider. Your credentials are never transmitted unencrypted.

**Rate limiting**: Automatic enforcement prevents runaway email sending, protecting both your reputation with the email provider and preventing unexpected costs.

## Best Practices

✅ **Configure custom SMTP early** - Don't rely on default rate limits (2/day) for production applications. Set up your own email service.

✅ **Choose the right provider** - Consider your volume needs, budget, and whether you need advanced features like detailed analytics.

✅ **Monitor usage** - Check email usage statistics in the admin interface to ensure you're within your rate limits.

✅ **Test before going live** - Use the SMTP test connection feature to verify settings work correctly.

❌ **Don't skip testing** - Use the SMTP test connection feature to verify settings before going live.

❌ **Don't ignore deliverability** - Choose reputable email service providers to ensure your emails actually reach recipients.

---

**Related Documentation:**
- [Email Templates →](/cloud/email-templates)
- [Secrets Management →](/cloud/secrets)
- [Admin Interface →](/cloud/admin)

# Custom Domains (Pro Feature)

Connect your own domain to your Kliv site instead of using the default `yoursite.kliv.site` address.

## Requirements

- **Pro subscription** required
- **Domain ownership** from any domain provider
- **DNS access** to modify your domain settings

## Setup Process

1. **Purchase a domain** from any provider (GoDaddy, Namecheap, Cloudflare, etc.)
2. **Navigate to Project Settings** in your Kliv project
3. **Follow the domain wizard** to connect your domain
4. **Update DNS settings** as instructed
5. **Verify connection** - Kliv will check your DNS configuration
6. **SSL certificate** automatically generated and installed

## DNS Configuration

**Required Setting:**
- Add a **CNAME record** pointing to `sites.kliv.dev`

**Example:**
- **Type:** CNAME
- **Name:** @ (for root domain) or www (for subdomain)
- **Value:** sites.kliv.dev

## Supported Providers

Kliv provides specialized instructions for popular providers:
- GoDaddy
- Namecheap
- Cloudflare
- Google Domains
- Others (generic instructions provided)

## SSL Certificates

**Automatic (Recommended):**
- Kliv generates and manages certificates automatically
- Auto-renewal before expiration
- No maintenance required

**Manual Upload:**
- Advanced users can upload their own certificates
- Must handle renewals manually
- Only needed for special security requirements

## Domain Verification

After DNS configuration:
1. **Kliv verifies** your domain points correctly to our servers
2. **SSL certificate** automatically provisioned (usually within minutes)
3. **Site goes live** on your custom domain
4. **Old kliv.site URL** remains active but redirects to your domain

## Common Issues

**Domain not working?**
- DNS changes can take up to 24 hours to propagate
- Verify CNAME record points to `sites.kliv.dev`
- Clear your browser cache

**SSL certificate pending?**
- Usually resolves within 5-10 minutes
- Ensure domain is pointing correctly first
- Contact support if issues persist beyond 24 hours

---

**Need help?** Check our [troubleshooting guide →](/help/troubleshooting) or [contact support →](/help/getting-help)
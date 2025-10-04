# Custom Domains (Pro Feature)

Custom domains allow Pro subscribers to use their own branded web address instead of the default `yoursite.kliv.site` subdomain. This professional touch helps establish your brand identity and creates a more memorable experience for your visitors.

## Requirements

To connect a custom domain, you'll need an active Pro subscription, ownership of a domain from any registrar, and access to modify your domain's DNS settings. The domain can be purchased from any provider—there are no restrictions on which registrar you use.

## Setup Process

The domain connection process is straightforward and guided. First, purchase your desired domain from any provider like GoDaddy, Namecheap, Cloudflare, or others. Once you own the domain, navigate to your project settings in Kliv and look for the custom domain section.

Kliv's domain wizard will walk you through each step of the connection process. You'll enter your domain name, and the system will provide specific DNS configuration instructions tailored to your domain and chosen setup. After updating your DNS settings as instructed, Kliv will automatically verify the connection and provision an SSL certificate for secure HTTPS access.

The entire process typically completes within minutes once DNS changes propagate, though initial DNS propagation can take up to 24 hours depending on your provider.

## DNS Configuration

The core requirement for connecting your domain is adding a CNAME record that points your domain to Kliv's hosting infrastructure. You'll need to create a CNAME record with the value `sites.kliv.dev`. For root domains (like `yourdomain.com`), use `@` as the record name. For subdomains (like `www.yourdomain.com`), use the subdomain prefix as the record name.

This CNAME record tells the internet that when someone visits your domain, they should be directed to Kliv's servers where your website is hosted. The setup is the same regardless of which domain provider you use, though the interface for adding DNS records varies between providers.

## Supported Providers

While any domain provider works with Kliv, we provide specialized setup instructions for popular registrars to make the process easier. These include step-by-step guides with screenshots for GoDaddy, Namecheap, Cloudflare, Google Domains, and several others. If your provider isn't specifically listed, don't worry—the generic CNAME setup instructions work universally.

The specialized guides help you navigate each provider's unique DNS management interface, ensuring you add the correct record type in the right location without confusion.

## SSL Certificates

Kliv automatically handles SSL certificate generation and management for your custom domain. Once your domain is verified as pointing correctly to our servers, we immediately request and install a certificate from Let's Encrypt, ensuring your site is accessible over secure HTTPS within minutes.

The automatic certificate management includes renewal before expiration, so you never have to worry about certificate maintenance. This hands-off approach works for the vast majority of users and provides enterprise-grade security without complexity.

For advanced users with specific security requirements, Kliv also supports manual certificate upload. This option requires you to obtain and manage certificate renewals yourself, so it's only recommended when you have particular compliance or security needs that require custom certificates.

## Domain Verification and Activation

After you update your DNS settings, Kliv continuously monitors your domain to detect when the changes have propagated. Our system checks every few minutes until it confirms your domain is pointing correctly to our servers. Once verified, we automatically provision your SSL certificate and activate your custom domain.

Your original `yoursite.kliv.site` URL remains functional and automatically redirects visitors to your custom domain, ensuring no links are broken during the transition. This seamless handoff means you can share your custom domain immediately without worrying about accessibility.

## Common Issues

DNS propagation is the most common source of delays when connecting custom domains. Changes to DNS records can take anywhere from a few minutes to 24 hours to propagate globally, depending on your DNS provider and internet service providers worldwide. If your domain isn't working immediately, this is typically why.

To troubleshoot, first verify that you've added the CNAME record correctly with the value `sites.kliv.dev`. Double-check the record type (CNAME, not A record) and ensure there are no typos in the target value. Clearing your browser cache or trying a different browser can help if you're seeing outdated results.

If your SSL certificate shows as pending beyond 10-15 minutes, ensure your domain is pointing correctly first, as certificates can only be issued after successful domain verification. Most certificate issues resolve automatically once DNS propagation completes.

---

**Need help?** [Contact support →](/help/getting-help)
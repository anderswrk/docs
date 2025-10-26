# Frequently Asked Questions

Find answers to the most common questions about Kliv.

## Getting Started

### What is Kliv?
Kliv is an AI-powered web development platform that lets you build React applications through natural conversation. Instead of writing code, you describe what you want to build, and Kliv generates the code for you.

### Do I need to know how to code?
No! Kliv is designed for everyone, regardless of coding experience. You can build professional applications by simply describing what you want in plain English.

### What technologies does Kliv use?
Kliv builds applications using modern web technologies:
- React 18 with TypeScript
- Tailwind CSS for styling
- Vite for fast builds
- Shadcn/ui component library
- Various other modern libraries as needed

### Is Kliv free to use?
Yes! Kliv offers a free plan with 10 credits per day (up to 30 per month) that includes full website hosting on kliv.site domains. Free sites display a small "Made with Kliv" badge and support up to 10 team members. Professional plans provide monthly credit allowances, custom domain support, remove the attribution badge, and include unlimited team members.

## Building Applications

### Should I start with a template or from scratch?
**Use a template if:** You find one that's 70%+ similar to your needs, want to launch quickly, or are building a common type of site. Templates come fully fleshed out with multiple pages and features.

**Start from scratch if:** Your concept is unique, you have specific requirements, or want complete creative control. You'll need to provide detailed initial prompts, but you get a completely custom result.

### What types of applications can I build?
You can build virtually any type of web application:
- **Rapid prototypes** and MVPs for startups
- **Personal websites**, portfolios, and blogs
- **Membership sites** with user authentication
- **E-commerce stores** with product catalogs
- **Business applications** and dashboards
- **SaaS applications** with user management
- **Creative projects** and interactive tools

### How do credits work?
**Full credit (1 credit):** Used when the AI takes action on your project - editing files, making changes, adding features, or any modification.

**Half credit (0.5 credits):** Used for conversational responses without actions - answering questions, providing guidance, or explanations.

**Free plan:** 10 credits daily, 30 monthly max, automatically refresh each day.
**Pro plans:** Monthly allowances that can be used anytime, reset each billing cycle.

### How do I communicate with Kliv effectively?
**For from-scratch builds:** Provide detailed initial prompts including business name, address, services offered, pricing, contact details, target audience, and design preferences. The more specific you are, the better results you'll get.

**For modifications:** Reference specific sections ("In the hero section..."), be specific about colors and positioning, and ask to see mobile versions when needed.

### Can I modify the generated code?
Yes! You can view all the generated code and even export it to work on locally. Kliv also supports importing existing React projects.

### How do I add backend functionality like user accounts?
For any backend features (user authentication, databases, server-side processing), you need to connect Supabase integration. Click the Supabase button in your project to set up an account and link it. Once connected, the AI can implement:
- User registration and login systems
- Database storage and management
- Real-time features and subscriptions
- Server-side functions and processing
- File storage and management

### How does GitHub integration work?
When you connect GitHub, every AI change automatically generates a commit and pushes to your repository. This provides:
- Complete source code backup under your control
- Full version history of your project
- Ability to work locally or collaborate with developers
- Bidirectional sync between Kliv and GitHub

We recommend making changes primarily in Kliv to take full advantage of AI assistance.

## Technical Questions

### Can I use my own components?
Yes, you can ask Kliv to create custom components or modify existing ones. You can also import components from external libraries.

### How does Kliv handle responsive design?
All applications built with Kliv are responsive by default and accessible to users with disabilities. Kliv uses React, TypeScript, Tailwind CSS, and Vite with automatic mobile optimization, semantic HTML structure, and accessibility compliance built in.

### What's the difference between templates and from-scratch builds?
**Templates:** Get fully functional sites with multiple pages and features already built. Perfect for quick launches when you find something 70%+ similar to your needs. You're somewhat limited by the template structure but get a head start.

**From-scratch:** Requires detailed initial prompts but gives complete creative control. You'll get a skeleton initially and need to flesh out each section through conversation, but the result is completely custom.

### Can I integrate with external APIs?
Absolutely! Kliv can help you integrate with any REST API, GraphQL endpoint, or third-party service. Just describe what you want to connect to.

### What about SEO and performance?
Kliv follows modern web development best practices:
- Semantic HTML structure
- Optimized images and assets
- Fast loading times
- SEO-friendly markup
- Accessibility compliance

## Deployment and Hosting

### How do I deploy my application?
Click the "Publish" button in Kliv, and your application will be deployed instantly. You'll get a live URL that you can share immediately.

### How does publishing work?
Sites are automatically published with unique URLs like `yoursite.kliv.site`. The URL is generated based on your template name or AI analysis of your from-scratch prompt. You can edit the subdomain name anytime (must be unique across all Kliv sites).

**Auto-publishing** is enabled by default - changes go live immediately. You can disable this to manually control when changes are published.

### Can I use my own domain?
Yes! Pro subscribers can connect custom domains by adding a CNAME record pointing to `sites.kliv.dev`. Kliv automatically handles SSL certificates and provides a setup wizard with provider-specific instructions. Custom domains remove the "Made with Kliv" badge completely.

### Where are applications hosted?
Kliv applications are hosted on a global CDN for fast loading times worldwide. All hosting includes SSL certificates and automatic scaling.

### Can I export my code?
Yes, you can export your entire project as a standard React application that you can run locally or deploy anywhere.

## Team Collaboration

### Can I work with team members?
Yes! Every Kliv account supports multiple users sharing the same projects and credit pool. Free accounts support up to 10 users, Pro accounts have unlimited team members at no extra cost.

### How do user roles work?
**Regular users** can edit projects and use the AI assistant. **Admin users** can also manage the team, send invitations, and access account settings. Enterprise accounts support custom roles with granular permissions.

### How do I invite team members?
Go to user management, enter their email address, and send an invitation. They'll receive an email to join your account and access shared projects.

## Account and Billing

### What are the different subscription plans?
**Free:** 10 credits daily (60/month), kliv.site hosting, "Made with Kliv" badge, up to 10 users
**Professional:** Monthly credit allowances, custom domains, no attribution badge, unlimited users, priority support  
**Enterprise:** SAML/SSO, custom roles, dedicated instances, advanced features

### How do I upgrade my plan?
Visit the subscription management page in account settings. You can upgrade, downgrade, or cancel anytime through the secure Stripe interface.

### How is payment handled?
All payments are processed securely through Stripe. Kliv never sees your payment information, ensuring enterprise-grade security for all transactions.

## Troubleshooting

### My application isn't working as expected
Try these steps:
1. Check the console for error messages
2. Describe the issue to Kliv for automatic debugging
3. Review recent changes in the chat history
4. Use the version history to revert if needed

### The preview isn't updating
- Refresh the preview panel
- Check your internet connection
- Clear your browser cache
- Contact support if the issue persists

### I can't access my project
- Verify you're logged into the correct account
- Check if the project was accidentally deleted
- Contact support for account recovery assistance

### How do I report bugs?
Use the feedback button in the interface or contact support directly. Include:
- Description of the issue
- Steps to reproduce
- Browser and device information
- Screenshots if helpful

## Best Practices

### How can I get better results from Kliv?
- Be specific and detailed in your requests
- Provide examples or references when possible
- Test frequently in the preview
- Break complex features into smaller parts
- Ask for explanations to understand the code

### What should I avoid?
- Vague or ambiguous requests
- Asking for too many changes at once
- Ignoring responsive design considerations
- Forgetting to test on different screen sizes

### How do I learn more about web development?
While Kliv handles the coding, understanding web development concepts can help:
- Learn basic HTML, CSS, and JavaScript concepts
- Understand responsive design principles
- Familiarize yourself with React concepts
- Study good UI/UX design practices

## Getting Help

### How do I contact support?
- Use the help button in the Kliv interface
- Email support@kliv.dev
- Check the documentation for answers
- Join our community Discord server

### What information should I include in support requests?
- Your account email
- Project name or URL
- Detailed description of the issue
- Steps to reproduce the problem
- Screenshots or screen recordings if helpful

### How quickly will I get a response?
- Free plan: 48-72 hours
- Paid plans: 24 hours or less
- Critical issues: Same day response
- Emergency support available for enterprise customers

Still have questions? [Contact our support team](mailto:support@kliv.dev).

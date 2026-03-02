# Email Setup Guide

## Setting up Resend for Quotation Emails

When customers submit a quotation request through the contact form, the details will be automatically sent to **khalidcomilla58@gmail.com**.

### Setup Steps:

1. **Create a free Resend account:**
   - Go to https://resend.com/signup
   - Sign up with your email (free tier includes 100 emails/day, 3,000/month)

2. **Get your API key:**
   - After signing in, go to https://resend.com/api-keys
   - Click "Create API Key"
   - Copy the generated API key (starts with `re_`)

3. **Add the API key to your project:**
   - Open the `.env.local` file in the root directory
   - Replace `re_YOUR_API_KEY_HERE` with your actual API key:
     ```
     RESEND_API_KEY=re_abc123xyz...
     ```

4. **Restart your development server:**
   - Stop the current server (Ctrl+C)
   - Run `npm run dev` again

### Testing:

1. Go to your website's contact form
2. Fill in all the fields and submit
3. Check khalidcomilla58@gmail.com for the quotation email

### How it works:

- When someone submits the quotation form, it sends a POST request to `/api/send-quotation`
- The API route uses Resend to send a formatted email with all the quotation details
- The email includes: company name, address, mobile number, quantity, and work description
- All content is formatted in Bengali for easy reading

### Notes:

- The sender email will be `onboarding@resend.dev` (default for free tier)
- To use a custom sender email (like info@graphiczone.com), you need to verify your domain in Resend
- Emails are sent instantly when the form is submitted

### Troubleshooting:

If emails aren't being received:
1. Check that `.env.local` has the correct API key
2. Verify the API key is valid in your Resend dashboard
3. Check the browser console for any error messages
4. Make sure you restarted the dev server after adding the API key
5. Check spam folder in Gmail

# Netlify Forms Setup Instructions for Next.js

This document provides instructions on how to set up Netlify Forms with Next.js to ensure that contact form submissions are properly recorded and forwarded to info@jcarbitrations.com.

## Important: Next.js and Netlify Forms Considerations

Next.js applications require special handling for Netlify Forms to work properly:

1. A static HTML form must exist in the public directory for Netlify to detect during build time
2. The form in your React components should match this static form exactly
3. The form must include a hidden input with name="form-name" and value matching the form's name
4. After making changes to forms, a full redeploy is required

## Enable Form Detection in Netlify

1. Log in to your Netlify account
2. Go to your site dashboard
3. Click on "Forms" in the left navigation menu
4. Click on "Enable form detection" if it's not already enabled
5. **Important:** Trigger a full redeploy by going to the "Deploys" section and clicking "Trigger deploy" > "Clear cache and deploy site"

## Configure Form Notifications

To receive email notifications when someone submits the contact form:

1. In your Netlify dashboard, go to "Forms"
2. Click on the "contact" form
3. Go to "Form notifications" > "Add notification" > "Email notification"
4. Set the email address to: info@jcarbitrations.com
5. Set a subject (e.g., "New contact form submission")
6. Click "Save"

## Testing the Form

After deploying the site with these changes:

1. Visit your website
2. Fill out and submit the contact form
3. Check the Netlify Forms dashboard to verify the submission was recorded
4. Check the info@jcarbitrations.com email inbox for the notification

## Troubleshooting

If form submissions are not appearing in your Netlify dashboard:

1. Make sure form detection is enabled in Netlify
2. **Perform a full redeploy with cache clearing** after enabling form detection
3. Check that both the React form and the static HTML form in public/index.html have:
   - The same `name` attribute (in this case, "contact")
   - The `data-netlify="true"` attribute
   - A hidden input with `name="form-name"` and `value="contact"`
4. Verify that the form is submitting to the correct endpoint (no custom AJAX handling)
5. Check the browser console for any JavaScript errors during form submission
6. Try submitting the form with the Network tab open in browser DevTools to see the request

### Next.js Specific Issues

For Next.js applications, these additional steps may help:

1. Make sure the static HTML form in public/index.html exactly matches your React form
2. Ensure you're not using any custom form handling that prevents the default form submission
3. Try temporarily disabling JavaScript in your browser and submitting the form to test if the static fallback works
4. Check if your Next.js configuration is interfering with form submissions (check next.config.js)

## Additional Resources

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Form Notifications Documentation](https://docs.netlify.com/forms/notifications/)
- [Netlify Forms with Next.js](https://www.netlify.com/blog/2021/10/25/how-to-use-netlify-forms-with-next.js/)
- [Troubleshooting Netlify Forms](https://docs.netlify.com/forms/troubleshooting/)

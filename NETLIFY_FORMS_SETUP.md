# Netlify Forms Setup Instructions

This document provides instructions on how to set up Netlify Forms to ensure that contact form submissions are properly recorded and forwarded to info@jcarbitrations.com.

## Enable Form Detection in Netlify

1. Log in to your Netlify account
2. Go to your site dashboard
3. Click on "Forms" in the left navigation menu
4. Click on "Enable form detection" if it's not already enabled
5. Redeploy your site by going to the "Deploys" section and clicking "Trigger deploy" > "Deploy site"

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
2. Verify that your site has been redeployed after enabling form detection
3. Check that the form in your HTML has the `data-netlify="true"` attribute
4. Ensure the form has a `name` attribute (in this case, "contact")
5. Confirm that the form includes a hidden input with `name="form-name"` and `value="contact"`

## Additional Resources

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Form Notifications Documentation](https://docs.netlify.com/forms/notifications/)
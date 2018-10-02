// Return all templates for both email and sms
TemplateList allTemplates = client.getAllTemplates(null);

// Only return email templates
TemplateList emailTemplates = client.getAllTemplates("email");

// Only return sms templates
TemplateList smsTemplates = client.getAllTemplates("sms");

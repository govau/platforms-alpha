---
id: sending-emails
title: Sending email messages
---

## Sending a single email

The following example shows how to send a single email.

```filetabs
file=docs/sending-emails/send.py lang=python label=Python
file=docs/sending-emails/send.sh lang=bash label=cURL
```

### Arguments

`template_id`

**Required**

The ID of the template. You can find this by signing into Notify and
going to the Templates page.

---


`email_address`

**Required**

The address of the recipient of the email.

---


`personalisation`

**Optional** depending on template

If a template has placeholder fields for personalised information such as name
or reference number, you need to provide their values in a map with key
and value pairs.

For example:

```
{
    "first_name": "Lisa",
    "amount_owing": "$15.50"
}
```

## Response

If successful, the shape of the response you recieve will resemble the
following.


```
{
  "content": {
    "body": "Hey there. Lisa\n\nPlease pay us $15.50 at your earliest convenience.\n", 
    "from_email": "your-service@digital.gov.au", 
    "subject": "Pay your bill soon."
  }, 
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-nnnnnnnnnnnn",
  "reference": "STRING", 
  "scheduled_for": null, 
  "template": {
    "id": "xxxxxxxx-xxxx-xxxx-xxxx-tttttttttttt",
    "uri": "https://rest-api.notify.gov.au/services/xxxxxxxx-xxxx-xxxx-xxxx-ssssssssssss/templates/xxxxxxxx-xxxx-xxxx-xxxx-tttttttttttt",
    "version": 3
  }, 
  "uri": "https://rest-api.notify.gov.au/v2/notifications/xxxxxxxx-xxxx-xxxx-xxxx-nnnnnnnnnnnn"
}
```

---
id: sending-texts
title: Sending text messages
---

## Sending a single text message

The following example shows how to send a single text message.

```filetabs
file=docs/sending-texts/send.py lang=python label=Python
file=docs/sending-texts/send.java lang=java label=Java
file=docs/sending-texts/send.sh lang=bash label=cURL
```

### Arguments

`template_id`

**Required**

The ID of the template. You can find this by signing into Notify and
going to the Templates page.

---


`phone_number`

**Required**

The phone number of the recipient of the text message.

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
---

`reference`

**Optional**

A unique identifier you create. This reference identifies a single unique notification or a batch of notifications. 


## Response

If successful, the shape of the response you recieve will resemble the
following.


```
{
  "content": {
    "body": "Hey there. Lisa\n\nPlease pay $15.50 at your earliest convenience",
    "from_number": "GOVAU"
  },
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-nnnnnnnnnnnn",
  "reference": "STRING",
  "scheduled_for": null,
  "template": {
    "id": "xxxxxxxx-xxxx-xxxx-xxxx-tttttttttttt",
    "uri": "https://rest-api.notify.gov.au/services/xxxxxxxx-xxxx-xxxx-xxxx-ssssssssssss/templates/xxxxxxxx-xxxx-xxxx-xxxx-tttttttttttt",
    "version": 1
  },
  "uri": "https://rest-api.notify.gov.au/v2/notifications/xxxxxxxx-xxxx-xxxx-xxxx-nnnnnnnnnnnn"
}
```

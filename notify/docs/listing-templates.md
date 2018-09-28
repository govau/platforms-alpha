---
id: listing-templates
title: Check available templates
---

Sometimes it's useful to know which templates are available to send from. The
response from this call gives you all the information necessary to know what can
be sent and what personalisation variables each template requires.

```filetabs
file=docs/listing-templates/list.py lang=python label=Python
file=docs/listing-templates/list.java lang=java label=Java
file=docs/listing-templates/list.sh lang=bash label=cURL
```


### Arguments
---
`template_type`

**Optional**

If omitted, the method returns all templates. Otherwise you can filter by:
- email
- sms



## Response

The response will have the following shape

By observing the `type` of a template, you can send messages through one
of the previoiusly described methods. Each key in the personalisations block
indicates a variable name that should be provided for the template to be sent.

```
{
  "templates": [
    {
      "body": "Hey there. ((user_name))\r\n\r\nplease pay us ((amount_owing)) at your earliest convience",
      "created_at": "2018-08-03T04:12:50.958944Z",
      "created_by": "someone@your-organisation.gov.au",
      "id": "a1f65b1d-7dc9-4573-be47-tttttttttttt",
      "name": "Amount owing reminder",
      "personalisation": {
        "amount_owing": {
          "required": true
        },
        "user_name": {
          "required": true
        }
      },
      "subject": null,
      "type": "sms",
      "updated_at": null,
      "version": 1
    },
    ...
  ]
}
```

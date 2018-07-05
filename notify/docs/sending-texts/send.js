client
  .sendText({
    templateId,
    phoneNumber,
    reference,
    templateData
  })
  .then(response => console.log(response))
  .catch(err => console.error(err));

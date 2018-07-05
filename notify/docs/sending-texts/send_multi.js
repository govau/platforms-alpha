const templateId = "...";

const texts = [
  {
    phoneNumber,
    reference,
    templateData
  },
  {
    phoneNumber,
    reference,
    templateData
  }
];

client
  .sendTextMulti({ templateId, texts })
  .then(response => console.log(response))
  .catch(err => console.error(err));

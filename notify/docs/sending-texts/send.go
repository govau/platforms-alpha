templateID := "..."

text := notify.Text{
	PhoneNumber: "...",
	Reference:   "...",
	TemplateData: notify.TemplateData{
		"name": "Kim",
	},
},

res, err := client.SendText(ctx, templateID, text)
if err != nil {
	// ...
}

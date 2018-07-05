templateID := "..."

texts := []notify.Text{
	notify.Text{
		PhoneNumber: "...",
		Reference:   "...",
		TemplateData: notify.TemplateData{
			"name": "Kim",
		},
	},
	notify.Text{
		PhoneNumber: "...",
		Reference:   "...",
		TemplateData: notify.TemplateData{
			"name": "Alex",
		},
	},
}

res, err := client.SendTextMulti(ctx, templateID, texts)
if err != nil {
	// ...
}

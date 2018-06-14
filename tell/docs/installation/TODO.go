t := client.Topic(topic)
result := t.Publish(ctx, &pubsub.Message{
        Data: []byte(msg),
})
// Block until the result is returned and a server-generated
// ID is returned for the published message.
id, err := result.Get(ctx)
if err != nil {
        return err
}
fmt.Printf("Published a message; msg ID: %v\n", id)
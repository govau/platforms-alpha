PublisherServiceApiClient publisherClient = PublisherServiceApiClient.Create();
PublisherClient publisher = PublisherClient.Create(
    new TopicName(projectId, topicId), new[] { publisherClient });

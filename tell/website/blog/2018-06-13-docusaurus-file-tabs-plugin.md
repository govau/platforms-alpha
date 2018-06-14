---
title: Docusaurus file tabs plugin
sidebar_label: Docusaurus file tabs
author: Jonathan Ingram
authorURL: https://twitter.com/jonathanbingram
authorImageURL: https://pbs.twimg.com/profile_images/835631099048972288/wd401V5W_400x400.jpg
---

As part of the Digital Transformation Agency’s Platforms Alpha, we wanted to build a prototype of a developer portal that would make it easier for customers to onboard to and use our services.

To rapidly build a website for this we used [Docusaurus](https://docusaurus.io).

<!--truncate-->

One of the first things we wanted to do was show a set of tabs that would allow users to toggle between a programming language in order to see how to do something in that language. This is a similar pattern to that done by [Google Cloud Platform](https://cloud.google.com/datastore/docs/reference/libraries#client-libraries-usage-go).

Since markdown is a first class citizen in Docusaurus, we needed to be able to add this tabs component to a markdown file and have it converted into HTML along with the rest of the markdown content.

What follows is an example of how the tabs component should render. In fact, what you can see below is actually a real rendering of the component. We call this "file tabs". Go ahead and interact with it.

```filetabs
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.cs lang=csharp label=C#
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.go lang=go label=Go
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.inline parser=md label=Java
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.js lang=js label=Node.js
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.php lang=php label=PHP
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.py lang=python label=Python
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.rb lang=ruby label=Ruby
```

This is how the markdown fence looks in order to render the file tabs component above:

````md
```filetabs
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.cs lang=csharp label=C#
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.go lang=go label=Go
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.inline parser=md label=Java
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.js lang=js label=Node.js
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.php lang=php label=PHP
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.py lang=python label=Python
file=website/blog/2018-06-13-docusaurus-file-tabs-plugin/example.rb lang=ruby label=Ruby
```
````

Note the markdown code fence name to use is `filetabs`.

More generally, this is the syntax:

````md
```filetabs
key1=value1 key2=value2
key1=value1 key2=value2 key3=value3
...
key1=value1 key3=value3
```
````

Where each key/value pair is an option. The valid options are:

- `file`: path to file to render in tab content.
- `lang`: markdown fence language to use when rendering.
- `label`: label to use in the tab link.
- `parser`: set to `md` to render the contents of `file` as embedded markdown instead of a preformatted code block. You don’t need to set `lang` if you use this option.

---
id: getting-started
title: Getting started
---

## Creating a notify client

The following example shows how to create a notify client.

Your API key can be generated in the Notify user interface. Log in and activate
the service you want to access.  Navigate to "API integration" from the
side menu. Enter "API Keys" and generate one for your client.

```filetabs
file=docs/getting-started/client.py lang=python label=Python
```

## Rolling your own client

Notify uses JWTs for authentication. This will be handled for you if you opt to
use a client library. If you plan to roll your own client, you'll need to re-implement JWT 
creation and set it as a header.

The JWT that Notify expects only includes a few claims.

Your header should be

```
{
    "alg": "HS256",
    "typ": "JWT"
}
```

and your payload of claims should include only

```
{
    "iss": $YOUR-SERVICE-ID,
    "iat": $CURRENT-TIME
}
```

This should be signed with your API key as a secret. You can experiment with
building a JWT like this at [jwt.io](https://jwt.io).

Keep in mind that the `iss` Issued at claim will need to be within a certain
tolerance of what the server expects. You won't be able to pre-generate a header
and re-use it throughout the lifetime of your client. Each request will need to
have an up-to-date JWT generated.

The resulting JWT should be added as a header in every request with the following format:

```
Authorization: Bearer ${JWT}
```

## Example implementation

Implementing this in your language of choice will likely be heavily reliant on
what JWT library is available. Here's an example of a function that builds our
JWT in the Go programming language, using 
[Square's go-jose package](https://github.com/square/go-jose)


```
func CreateJWT(serviceID, API_Key string) (string, error) {
	key := jose.SigningKey{
		Algorithm: jose.HS256,
		Key:       []byte(API_Key),
	}

	sig, err := jose.NewSigner(key, (&jose.SignerOptions{}).WithType("JWT"))
	if err != nil {
		return "", err
	}

	cl := jwt.Claims{
		Issuer:   serviceID,
		IssuedAt: jwt.NewNumericDate(time.Now()),
	}

	return jwt.Signed(sig).Claims(cl).CompactSerialize()
}
```

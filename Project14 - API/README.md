# API / JSON



### ANY API
https://any-api.com


#### Install
1. npm init
2. npm install express body-parser
3. npm install request


#### REQUEST npm Package

To make a contact to external API call using our express server.
` LOCAL Server(node/express) <-- API --> External Server `
Use REQUEST npm module. 
- npm install request



###### BitcoinExchange website API
cURL = to interact(request) a command from specific Client by URL.

````
curl https://apiv2.bitcoinaverage.com/convert/global?from=BRL&to=CAD&amount=2
````

URL Codes ( & means AND; ? means parameters)




# JSON

```
var wardrobe = {
    door:2,
    drawer:2,
    color:"red
}
```

#### CONVERT JSON <-> Javascript Object

  * into Json -> 
  ` JSON.stringify(wardrobe); `

  * into Javascript object (from flat JSON)->
  ` JSON.parse(jsonFlatWardrobe); `


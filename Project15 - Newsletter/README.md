# API / JSON


### Basic HTTP authorization - any API
``` 
var username = "rmc3408";
    var password = "f0679f27a55fd90412b5ef954423874b-us18";
    var auth = username + " " + password;

 var option = {
        url: 'https://us18.api.mailchimp.com/3.0/lists/f6f5e44c55',
        method: 'POST',
        headers: {                  
            "Authorization": auth}
    };

    request(option, function (error, response, body) {
        if (error) {
            console.log(error);

        } else {
            console.log(response.statusCode);
            console.log('body : ', body);
        }

});
```


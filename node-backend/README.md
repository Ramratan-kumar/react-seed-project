# news-api
get news using gnews api

clone project using repository url.

1. install package using npm install
2. create account in gnews.io
3. paste generated api key in development.json file (path:config/development.json)
4. start project using npm start or node index.js
5. call api to get news info

API details

API: http://localhost:8080/news
Method: post

request object: 
{
    "countryCode":Sting,
    "category":String,
    "searchKey":String,
    "title":String
    "description":String
}

response object: 

{ "totalArticles": Number,
    "articles": [
        {
            "title": String,
            "description": String
            "content": String
            "publishedAt": String,
            "auther": String
        }
    ]
}


ex of request object


{
    "countryCode":"in",
    "category":"general",
    "searchKey":"iphone 12",
    "title":'ios'
    "description":'ios'
}




-----------------------------------------------------------------
Key         |  Type         |Required       | Default value
------------------------------------------------------------------
countryCode | String        |Optional        | in
-------------------------------------------------------------------
category    | String         |Optional       | ""
-------------------------------------------------------------------
searchKey   | String        |Optional       | ""
-------------------------------------------------------------------
title       | String        | Optinal       | ""
-------------------------------------------------------------------
description |String         |Optional       |""

------------------------------------------------------------------
Status Code        |         Message
------------------------------------------------------------------
200                |  Success
---------------------------------------------------------------
500                |  Internal Server Error 
----------------------------------------------------------------
500                | Country Code not valid
---------------------------------------------------------------
401                | Request failed with status code 401

====================================================================================
Note: Cache have implement in middleware if record is present for same search string data will not
return from the cache other wise call the api. 
Cache will expired after 10000 second
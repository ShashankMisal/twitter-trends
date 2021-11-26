
# [Twitter-Trends](https://twitter-trendss.netlify.app/)

A Twitter clone with real time fetching of top 50 trending topics using twitter's api.

> Note: `Real time fetching of api is not working on PRODUCTION VERSION because of the proxy which is used to fix the CORS error as this application is not having a real server`

--

> Note:`CORS ISSUE in fixed in DEVELOPMENT VERSION and its seamlessly working in local environment`


#### Below are screenCaptures of local and orginal twitter trending section
### Twitter-trends portal Trending Section 👇
---
![clonedevicetwitter](https://user-images.githubusercontent.com/68539474/143623235-38239ff8-7073-448a-bac6-b065403dfb30.png)

### Original Twitter Trending Section 👇
---
![deviceoriginaltwitter](https://user-images.githubusercontent.com/68539474/143623327-14b0e89c-4582-49cc-ad1a-46dcb3151eed.png)

> Note: `check the trending section of both the above screen-captures`

# Steps to run in local environment

1. Go to Twitter API  and create a new project.
```
https://developer.twitter.com/en/docs/twitter-api
```
2. Go to FIREBASE Website and create a new project
```
https://firebase.google.com/
```
3. Create a .env file at root of your source code
```
.env
```

4. Copy your keys and tokens from your newly created project and paste them in .env file using below format.
```
REACT_APP_KEY="Your bearer token from twitter-api"

REACT_APP_API_KEY="Your firebase api key"
REACT_APP_AUTH_DOMAIN="Your firebase auth domain"
REACT_APP_PROJECT_ID="Your firebase project id"
REACT_APP_STORAGE_BUCKET="Your storage bucket"
REACT_APP_MESSAGING_SENDER_ID="Your firebase messaging sender id"
REACT_APP_APP_ID="Your firebase app id"
REACT_APP_MEASUREMENT_ID="Your firebase measurement id"
```

>  `Put your keys and tokens without double quotes`
> `Your .env file should look like 👆`

5. Clone the repository
```
git clone "https://github.com/ShashankMisal/twitter-trends.git"
```
6. Install the dependencies
```
npm install
```
7. Start the server
```
npm start
```

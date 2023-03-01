# google-oauth-to-jwt
Parse your `access_token` from google oauth to JWT for your backend server

## Motivation
If you developing front end web app and using google oauth for authentication you might using library called `@react-oauth/google` right ?
So basically if you are using hook API like `useGoogleLogin` from the lib you'll got no JWT token on the `onSuccess` event. Instead you'll get `access_token` from the response.

## Goals
So that's why I made this API/library for you to get JWT token from the `access_token` to process the JWT on your backend server

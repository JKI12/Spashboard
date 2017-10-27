# Spotboard

This is the code for Spotboard, a Spotify dashboard that let you view your Top Artists / Tracks and stats in a clean dashboard.

## Setting up
First of all you have to do a build
```
npm run build
```

Then you have to provide it the following env variables:
- CLIENT_ID / The app client id
- CLIENT_SECRET / The app client secret
- URL / The url of the server defaults to localhost:3000

Example command
```
CLIENT_ID=ddd CLIENT_SECRET=sss URL=http://example.com npm start
```

## Docker
There is a docker file that can be build and used to run the server just run the folowing command
```
  npm run build
  docker build . -t spotboard
  docker run spotboard
```
Provide the images the same environment variables also, the url one might be not be localhost:3000 depending on the port the docker container is running on
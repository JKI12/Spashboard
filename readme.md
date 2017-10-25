# Spashboard

This is the code for Spashboard, a Spotify dashboard that let you view your Top Artists / Tracks and stats in a clean dashboard.

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
import path from 'path';
import koa from 'koa';
import koaRouter from 'koa-router';
import koaBodyParser from 'koa-bodyparser';
import koaSession from 'koa-session';
import serve from 'koa-static-server';
import passport from 'koa-passport';
import { Strategy as SpotifyStrategy } from 'passport-spotify';
import moment from 'moment';

import reactRender from './middleware/react-render';
import spotifyDataMiddleware from './middleware/spotify-data';
import storeMiddleware from './middleware/store';
import tokenExpired from './middleware/token-expired';
import { SPOTIFY_SETTINGS } from '../shared/constants';
import errorView from './view/error';
import usersDB from './db/users';

const app = new koa();
const router = new koaRouter();

app.use(koaBodyParser());

app.use(serve({
  rootDir: path.join(__dirname, '../static'),
  rootPath: '/static'
}));

app.keys = [ 'spashboard:sesh' ];
app.use(koaSession(app));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  usersDB.findUser(id)
    .then(user => done(null, user))
    .catch(error => done(error, null));
});

passport.use(new SpotifyStrategy({
  clientID: SPOTIFY_SETTINGS.CLIENT_ID,
  clientSecret: SPOTIFY_SETTINGS.CLIENT_SECRET,
  callbackURL: SPOTIFY_SETTINGS.CALLBACK_URL
},
  async (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      const user = {
        id: profile.id,
        accessToken,
        expires: moment(new Date()).add(55, 'minutes').toISOString()
      };

      return usersDB.findOrCreate(user)
        .then(user => {
          done(null, user);
        })
        .catch(error => {
          done(error, null);
        });
    });
  }
));

app.use(passport.initialize());
app.use(passport.session());

router.get('/auth/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-recently-played', 'user-top-read'],
    showDialog: true
  })
);

router.get('/callback',
  passport.authenticate('spotify', {
    successRedirect: '/',
    failureRedirect: '/error'
  })
);

router.get('/logout', async (ctx) => {
  await usersDB.removeUser(ctx.state.user.id);
  ctx.logout();
  ctx.redirect('/');
});

router.get('/error', (ctx) => {
  ctx.body = errorView();
});

router.get('/', tokenExpired, storeMiddleware, spotifyDataMiddleware, reactRender);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

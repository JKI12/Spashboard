export default (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta property="og:title" content="Spotboard - A dashboard for Spotify"/>
        <meta property="og:url" content="https://www.spotboard.pro/"/>
        <meta property="og:site_name" content="Spotboard"/>
        <meta name="description" content="A dashboard for Spotify that will show you your music tastes from now to way back">
        <meta name="author" content="Jake King">        
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Spotboard - A dashboard for Spotify</title>
        <link rel="stylesheet" type="text/css" href="/static/bundle.css">        
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
};

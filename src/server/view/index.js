export default (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">    
        <title>Spotboard</title>
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

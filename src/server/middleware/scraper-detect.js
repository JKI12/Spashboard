export default async (ctx, next) => {
  const fbRegex = /^FacebookExternalHit\/.*?/i;
  const twRegex = /^TwitterBot\/.*?/i;
  const slRegex = /^Slackbot-LinkExpanding\/.*?/i;

  const userAgent = ctx.request.header['user-agent'];

  if (fbRegex.test(userAgent) || twRegex.test(userAgent) || twRegex.test(slRegex)) {
    return ctx.redirect('/tags');
  }

  await next();
};

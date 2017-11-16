export default async (ctx, next) => {
  const fbRegex = /^FacebookExternalHit\/.*?/i;
  const twRegex = /^TwitterBot\/.*?/i;

  const userAgent = ctx.request.header['user-agent'];

  if (fbRegex.test(userAgent) || twRegex.test(userAgent)) {
    return ctx.redirect('/tags');
  }

  await next();
};

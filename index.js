module.exports = function(values) {
  return async function(ctx, next) {
    const clashedKeys = Object.keys(values).filter((k) => ctx[k] !== undefined);
    clashedKeys.forEach((k) => {
      console.log(`[KOA-ASS] Warning: '${k}' is defined on context.`);
    });
    Object.assign(ctx, values);
    await next();
  };
};

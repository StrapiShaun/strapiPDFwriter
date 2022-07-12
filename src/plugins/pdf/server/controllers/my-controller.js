'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('pdf')
      .service('myService')
      .getWelcomeMessage();
  },
};

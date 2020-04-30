'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.resources('articles', '/api/frontend/articles', controller.frontend.articles)
    router.get('/api/frontend/articles', controller.frontend.articles.index)
    router.post('/api/frontend/articles', controller.frontend.articles.create)
};

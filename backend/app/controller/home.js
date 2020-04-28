'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = 'hi, egg';
    }

    async createArticle() {
        const { ctx } = this
        try {
            const { Article } = ctx.model,
                article = ctx.request.body
            console.log(article, '======', Article.create)
            await Article.create(article)
            console.log('存储完毕')
            ctx.body = {
                err_no: 0,
                result: 111
            }
        }catch(e) {
            console.log(e);
        }
    }
}

module.exports = HomeController;

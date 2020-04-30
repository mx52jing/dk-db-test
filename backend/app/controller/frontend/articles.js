'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async index() {
        const { ctx } = this;
        try {
            const { Article } = ctx.model,
                result = await Article.find({})
            ctx.body = {
                err_no: 0,
                result
            }
        }catch(e) {
            console.log(e);
        }
    }

    async create() {
        const { ctx } = this
        try {
            const { Article } = ctx.model,
                article = ctx.request.body
            await Article.create(article)
            ctx.body = {
                err_no: 0,
                result: '存储成功'
            }
        }catch(e) {
            console.log(e);
        }
    }
}

module.exports = ArticleController;

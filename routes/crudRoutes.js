const axios = require('axios'),
    {Article} = require('../models/articleModel')

module.exports = app => {
    app.post('/db/store_article', (req, res) => {
        try {
            const {body} = req
            Article.create(body, (err, article) => {
                if (err) return handleError(err);
                //checks if db post was successful
                return res.send(article.statusText)
            });
        } catch (error) {
            res.send(error)
        }
    })

    app.get('/db/get_articles', (req, res) => {
        try {
            Article.find().then(result => {
                res.send(result)
            })
        } catch (error) {
            res.send(error)            
        }
    })

}
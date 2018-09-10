const axios = require("axios"),
    { NEWS_API_KEY} = require('../config')

module.exports = async app => {
    try {
        app.get('/api/fetch_articles', (req, res) => {
            const result = axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`)
            console.log(result)
            return res.send(result)
        })
    } catch (error) {

    }
}
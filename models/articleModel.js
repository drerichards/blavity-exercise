'use strict'
const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    author: {
        type: String
    },
    description: {
        type: String
    },
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    urlToImage: {
        type: String
    },
})

const Article = mongoose.model('Article', articleSchema)

module.exports = { Article }
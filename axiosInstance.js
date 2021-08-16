const axios = require('axios')
const C = require('./constants')

module.exports = axios.create({
    baseURL: C.baseURL,
    timeout: C.requestTimeout,
    headers: { "Authorization": "Bearer TokenGoesHere" }
  })
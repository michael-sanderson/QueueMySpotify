const axios = require('axios')

module.exports = (C) => axios.create({
    baseURL: C.baseURL,
    timeout: C.requestTimeout,
    headers: C.header
  })
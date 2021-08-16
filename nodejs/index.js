
const axiosInstance = require('axiosInstance.js')
const C = require('./constants')
const log = console.log

const initGetSongs = require('./spotifyHelpers/getSongs')
const getSongs = initGetSongs(C, axiosInstance)

exports.handler = async (event) => {
  return await getSongs(event.searchQuery)
}
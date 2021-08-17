const C = require('./constants')
const log = console.log

const axios = require('axiosInstance.js')
const instance = axios(C)

const initGetSongs = require('./spotifyHelpers/getSongs')
const getSongs = initGetSongs(C, instance, log)

const initAddSong = require('./spotifyHelpers/addSong')
const addSong = initAddSong(C, instance, log)

exports.handler = async (event) => {
    return event.httpMethod == "GET"
      ? await getSongs(event.searchQuery)
      : await addSong(event.data.songURI, event.data.songInfo)
}
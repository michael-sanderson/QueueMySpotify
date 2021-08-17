module.exports = (C, instance, log) =>
   (songURI, songInfo) => {
        return instance.post(C.addSongURI, {}, {
        params: { 'uri': songURI }
    })
        .then(response => {
            log(response)
            return songInfo + C.addSuccess
        })
        .catch(error => {
            log(error)
            return songInfo + C.addError
})
}
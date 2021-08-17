module.exports = {
    addError: ' was not added to the queue, unexpected error occurred.',
    addSongURI: '/me/player/queue',
    addSuccess : ' was successfully added to the Spotify queue.',
    baseURL: 'https://api.spotify.com/v1',
    header: { "Authorization": "Bearer BQCFjZp2YbOBANlkhYK0YNFe0XfDVQEhpcIfSobN52poDGsbRSX0tEFWV9qDP5TMc1wFZpCdoBd5R290XyewSCMyc9Pgdv5UpIWRyP__I0WywMtLPctWiuIuM92fPzF4hmGbVKrKJhwsxQ" },
    requestTimeout: 1000,
    searchParams: {
        'type': 'track', 
        'market': 'gb',
        'limit': 12
    },
    searchURI: '/search'
}
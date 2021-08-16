module.exports = {
    baseURL: 'https://api.spotify.com/v1',
    searchUri: '/search',
    requestTimeout: 1000,
    searchParams: {
        'type': 'track', 
        'market': 'gb',
        'limit': 12
    }
}
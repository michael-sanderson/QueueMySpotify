module.exports = (C, instance, log) =>
   (searchSyntax) => {
        return instance.get(C.searchUri, {
        params: { 
            ...C.searchParams, 
            'q': searchSyntax }
    })
        .then(response => {
            return response.data.tracks.items
        })
        .catch(error => {
            console.log(error)
            return error
})
}
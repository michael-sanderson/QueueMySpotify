module.exports = (C, instance, log) =>
   (searchSyntax) => {
       log(searchSyntax)
       log(instance)
        return instance.get(C.searchURI, {
        params: { 
            ...C.searchParams, 
            'q': searchSyntax }
    })
        .then(response => {
            return response.data.tracks.items
        })
        .catch(error => {
            log(error)
            return error
})
}
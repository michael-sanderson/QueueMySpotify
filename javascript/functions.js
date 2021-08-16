function initSearch(event) {
    //stop submit the form, we will post it manually.
    event.preventDefault()

    //grab search syntax from text box
    const searchQuery = $("#song-title").val()

    //update user with event happenings
    $("#server-results").text("Searching for " + searchQuery)

    const find_song_url = "https://pvhj5ftm01.execute-api.eu-west-2.amazonaws.com/Test"

    // disable the submit button
    $("#btnSubmit").prop("disabled", true);

    // reset the content between searches
    document.getElementById("song-results-body").innerHTML = ""

    // Issue GET request to SPOTIFY API Endpoint
    $.ajax({
        type: "GET",
        url: find_song_url,
        contentType: 'application/json',
        data: { searchQuery },
        success: (trackData) => {
            trackData.forEach(displayTrack)
            $("#server-results").text("Songs found! Click one to add or search again.")
            $("#btnSubmit").prop("disabled", false)
        },
        error: (e) => {
            $("#server-results").text("Unable to find " + searchQuery)
            console.log("ERROR : ", e)
            $("#btnSubmit").prop("disabled", false)
        }
    });
}

const addToQueue = (header, song_uri, song_info) => {
    const put_song_url = "https://api.spotify.com/v1/me/player/queue?uri="
    $.ajax({
        type: "POST",
        url: put_song_url.concat(song_uri),
        contentType: 'application/json',
        headers: header,
        success: function (data) {
            $("#server-results").text("Successfully added " + song_info + " to the queue.")
            console.log("SUCCESS : ", data)
        },
        error: function (e) {
            $("#server-results").text("Unable to add " + song_info + " to the queue")
            console.log("ERROR : ", e)
            reload(500, "Unexpected error occurred! Press OK to refresh page.")
        }
    })
}

const displayTrack = (track) => {
    // get current song data
    const song = track.name
    const artist = track.artists[0].name
    const artwork_location = track.album.images[1].url
    const song_uri = track.uri
    const song_info = song + " by " + artist

    // create song container
    const song_container = document.createElement("div");
    song_container.classList.add("col-lg-4", "col-md-4")
    song_container.setAttribute("id", "box")

    // create artwork container
    const img_container = document.createElement("div");
    img_container.classList.add("row")
    img_container.setAttribute("id", "img-content")
    img_container.setAttribute("style", "height:300px;")

    const img = document.createElement("img")
    img.setAttribute("style", "width:300px;height:300px;")
    img.src = artwork_location

    // create link to add song to queue for each song
    const linkToAdd = document.createElement("a")
    linkToAdd.setAttribute("id", song_uri)
    linkToAdd.setAttribute("title", "Click to add this song to queue.")
    linkToAdd.addEventListener("click", () => addToQueue(header, song_uri, song_info))

    // add link to image
    linkToAdd.appendChild(img)
    img_container.appendChild(linkToAdd)

    // create description container and content
    const description_container = document.createElement("div");
    description_container.classList.add("row")
    description_container.setAttribute("id", "desc")
    description_container.appendChild(document.createTextNode(song_info))

    // add artwork and description to their containers
    song_container.appendChild(img_container)
    song_container.appendChild(description_container)

    // add containers to the body
    document.getElementById("song-results-body").appendChild(song_container)
}

const reload = (ms, alertMessage) => {
    setTimeout(() => {
        alert(alertMessage)
        location.reload(true)
    }, ms)
}
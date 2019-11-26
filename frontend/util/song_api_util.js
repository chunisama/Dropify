export const fetchSongs = (props) => {
    return (
        $.ajax({
            url: "api/songs",
            method: "GET",
            data: { props },
        })
    )
}
export const fetchSong = (id) => {
    return (
        $.ajax({
            url: `api/songs/${id}`,
            method: "GET"
        })
    )
}



import axios from "axios"

const API_KEY =
  process.env.NEXT_PUBLIC_LASTFM_API_KEY || "4958eb7f6ab4905b7532ab77fa9edc62"

export const getTopArtists = (page: number = 1) => {
  const data = axios
    .get(
      `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&page=${page}&format=json`
    )
    .then(res => res.data)

  return data
}

export const getTopAlbums = (name: string = "") => {
  const data = axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${API_KEY}&format=json`
    )
    .then(res => res.data)

  return data
}

export const getTopTracks = (name: string = "") => {
  const data = axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${API_KEY}&format=json`
    )
    .then(res => res.data)

  return data
}

export interface IDetailPage {
  uaString: string
  topAlbums: ITopAlbums
  topTracks: ITopTracks
}

interface ITopAlbums {
  topalbums: ITopAlbum
}

interface ITopAlbum {
  album: IAlbum[]
}

interface IAlbum {
  name: string
  image: IImage[]
  playcount: string
  artist: IArtist
}

interface IArtist {
  name: string
}

interface IImage {
  "#text": string
}

interface ITopTracks {
  toptracks: ITopTracks
}

interface ITopTracks {
  track: ITrack[]
}

interface ITrack {
  name: string
  image: IImage[]
  playcount: string
  artist: IArtist
}

export interface IHomePage {
  uaString: string
  artists: IArtists
}

interface IArtists {
  artist: IArtist[]
}

interface IArtist {
  name: string
  image: IImage[]
  listeners: string
  playcount: string
}

interface IImage {
  "#text": string
}

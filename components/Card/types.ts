export interface CardProps {
  data?: IAlbum | IArtist | ITrack
  isArtistList?: boolean
  isTopAlbum?: boolean
  isTopTrack?: boolean
}

interface IAlbum {
  name?: string
  artist?: string
  image?: IImage[]
  url?: string
  listeners?: string
  playcount?: string
}

interface IArtist {
  name?: string
  image?: IImage[]
  url?: string
  listeners?: string
  playcount?: string
}

interface ITrack {
  name?: string
  artist?: string
  image?: IImage[]
  url?: string
  listeners?: string
  playcount?: string
}

interface IImage {
  "#text": string
}

import { Fragment } from "react"
import { CardStyled, LinkStyled } from "./styled"
import { CardProps } from "./types"
import { useRouter } from "next/router"
import Image from "next/image"
const Card = ({
  data,
  isArtistList = false,
  isTopAlbum = false,
  isTopTrack = false,
  ...rest
}: CardProps) => {
  const { name = "", image = [], listeners = "", playcount = "" } = data || {}
  const router = useRouter()
  const { details } = router?.query || {}

  const urlToName = details?.toString().replaceAll("+", " ")
  const nameToUrl = name?.replaceAll(/ /g, "+")

  return (
    <CardStyled {...rest}>
      <LinkStyled
        href={`/artist/${nameToUrl}`}
        className={!isArtistList ? "disabled" : ""}
      >
        <div className='card'>
          <div className='card__image'>
            <Image
              src={
                image[1]?.["#text"] ||
                "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png"
              }
              alt={name}
              width={64}
              height={64}
            />
          </div>
          <div className='card__content'>
            {isArtistList && (
              <div className='card__content__artist'>
                <h3>Artist</h3>
              </div>
            )}
            {(isTopAlbum || isTopTrack) && (
              <div className='card__content__artist'>
                <h3>{name}</h3>
              </div>
            )}
            <h3 className='card__content__title'>{urlToName || name}</h3>
          </div>
          <div className='card__stats'>
            {isTopAlbum && <p>{playcount} play</p>}
            {isTopTrack && (
              <Fragment>
                <p className='card__text'>{listeners} listeners</p>
                <p className='card__text'>{playcount} play</p>
              </Fragment>
            )}
            {isArtistList && (
              <Fragment>
                <p className='card__text'>Listeners: {listeners}</p>
                <p className='card__text'>Playcount: {playcount}</p>
              </Fragment>
            )}
          </div>
        </div>
      </LinkStyled>
    </CardStyled>
  )
}

export default Card

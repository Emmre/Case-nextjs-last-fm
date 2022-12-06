import { GetServerSideProps } from "next"
import { Card } from "components"
import { FC, Fragment } from "react"
import { IDetailPage } from "types"
import { getTopAlbums, getTopTracks } from "services"
import { Container, Content, Title } from "styles/global"

const Details: FC<IDetailPage> = ({ topAlbums, topTracks }) => {
  const {
    topalbums: { album },
  } = topAlbums
  const {
    toptracks: { track },
  } = topTracks

  return (
    <Container>
      <Card />
      <Content>
        <div>
          <Title>Top Albums</Title>
          {album?.map((item, index) => (
            <Fragment key={index}>
              <Card data={item} isTopAlbum />
            </Fragment>
          ))}
        </div>
        <div>
          <Title>Top Tracks</Title>
          {track?.map((item, index) => (
            <Fragment key={index}>
              <Card data={item} isTopTrack />
            </Fragment>
          ))}
        </div>
      </Content>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { details } = context.query as { details: string }
  const topAlbums = await getTopAlbums(details)
  const topTracks = await getTopTracks(details)
  return {
    props: {
      uaString: context.req.headers["user-agent"],
      topAlbums,
      topTracks,
    },
  }
}
export default Details

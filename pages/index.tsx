import { GetServerSideProps } from "next"
import { FC, Fragment, useContext, useState } from "react"
import { IHomePage } from "types"
import InfiniteScroll from "react-infinite-scroll-component"
import { getTopArtists } from "services"
import { useRouter } from "next/router"
import { Card } from "components"
import { ThemeContext } from "store/DarkModeContext"
import { ToggleThemeButton } from "styles/global"

const Home: FC<IHomePage> = ({ artists }) => {
  const { isDark, toggleDarkMode } = useContext(ThemeContext)
  const { artist } = artists || {}
  const router = useRouter()
  const [posts, setPosts] = useState(artist)
  const [page, setPage] = useState(Number(router.query.page) || 2)

  const getMoreAlbums = async () => {
    const data = await getTopArtists(page)
    setPage(prev => prev + 1)
    setPosts((prev) => [...prev, ...data.artists.artist])
    router.push(`/?page=${page}`, undefined, { shallow: true })
  }

  return (
    <div className='container'>
      <ToggleThemeButton onClick={() => toggleDarkMode()}>
        {isDark ? "Dark Mode" : "Light Mode"}
      </ToggleThemeButton>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMoreAlbums}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {posts.map((item, index) => (
          <Fragment key={index}>
            <Card data={item} isArtistList />
          </Fragment>
        ))}
      </InfiniteScroll>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const currentPage = Number(context.query.page) || 1
  const { artists } = await getTopArtists(currentPage)
  return {
    props: {
      uaString: context.req.headers["user-agent"],
      artists,
    },
  }
}
export default Home

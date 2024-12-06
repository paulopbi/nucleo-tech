import Header from '../../components/Header/Header'
import PostsCard from '../../components/PostsCard/PostsCard'
import Search from '../../components/Search/Search'

function Home() {
  return (
    <>
      <Header>
        <Search />
      </Header>
      <PostsCard />
    </>
  )
}

export default Home

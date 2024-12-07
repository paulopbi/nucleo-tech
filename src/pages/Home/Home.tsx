import { useState } from 'react'
import Header from '../../components/Header/Header'
import PostsCard from '../../components/PostsCard/PostsCard'
import Search from '../../components/Search/Search'

function Home() {
  const [input, setInput] = useState<string>('')

  return (
    <>
      <Header>
        <Search setInput={setInput} />
      </Header>
      <PostsCard input={input} />
    </>
  )
}

export default Home

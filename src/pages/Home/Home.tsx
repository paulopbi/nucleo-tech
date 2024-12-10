import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import PostsCard from '../../components/PostsCard/PostsCard'
import Search from '../../components/Search/Search'
import Meta from '../../components/Meta/Meta'
import deletePost from '../../helpers/deletePost'

function Home() {
  const [input, setInput] = useState<string>('')

  useEffect(() => {
    const deleteTime = setTimeout(() => {
      deletePost()
    }, 180000)

    return () => clearTimeout(deleteTime)
  }, [])

  return (
    <>
      <Meta
        title="Home"
        description="Página inicial NúcleoHome que é um blog sobre tecnologia, video games e cultura, onde você pode escrever suas proprias matérias, e elas serão apagadas depois de 4 minutos."
      />
      <Header>
        <Search setInput={setInput} />
      </Header>
      <PostsCard input={input} />
    </>
  )
}

export default Home

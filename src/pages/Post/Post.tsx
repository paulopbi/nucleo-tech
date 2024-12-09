import { useParams } from 'react-router-dom'
import Article from '../../components/Article/Article'
import Header from '../../components/Header/Header'

function Post() {
  const { id } = useParams()

  if (!id) return

  return (
    <>
      <Header />
      <Article id={id} />
    </>
  )
}

export default Post

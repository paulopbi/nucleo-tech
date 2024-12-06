import { useParams } from 'react-router-dom'
import Article from '../../components/Article/Article'

function Post() {
  const { id } = useParams()

  if (!id) return <p>Post not found</p>

  return <Article id={id} />
}

export default Post

import { IPosts } from '../../interfaces/interfaces'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import './PostsCard.style.scss'
import Loading from '../Loading/Loading'
import useFetchPosts from '../../hooks/useFetchPosts'

function PostsCard() {
  const { data, loading, error } = useFetchPosts<IPosts[]>(
    'http://localhost:3000/posts',
  )

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <Loading />}
      {data &&
        data.map((post: IPosts) => (
          <section className="container" key={post.id}>
            <article className="article">
              <Link to={`/post/${post.id}`}>
                <div className="article-date-container">
                  <time className="date">17 de ago, 2024</time>
                  <div className="like-icon">
                    <Heart
                      size={28}
                      color="#E07B67"
                      fill={`${post.liked ? '#E07B67' : 'transparent'}`}
                    />
                  </div>
                </div>
                <div>
                  <h2 className="title article-title">{post.title}</h2>
                  <p className="description">{post.description}</p>
                </div>
              </Link>
            </article>
          </section>
        ))}
    </>
  )
}
export default PostsCard

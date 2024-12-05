import { useContext } from 'react'
import { IPosts } from '../../interfaces/interfaces'
import { PostsContext } from '../../context/PostsContext'
import { Heart } from 'lucide-react'
import './PostCard.style.scss'

function PostCard() {
  const { data, loading, error } = useContext(PostsContext) ?? {}
  console.log(data)

  if (!data) return

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {data.map((post: IPosts) => (
        <section className="container" key={post.id}>
          <article className="article">
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
          </article>
        </section>
      ))}
    </>
  )
}
export default PostCard

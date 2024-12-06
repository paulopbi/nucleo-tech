import { ArrowLeft } from 'lucide-react'
import { IPosts, PostsContextType } from '../../interfaces/interfaces'
import { Link } from 'react-router-dom'
import './Article.style.scss'
import useFetchPosts from '../../hooks/useFetchPosts'
import Loading from '../Loading/Loading.tsx'

function Article({ id }: { id: string }) {
  const { data, loading, error }: PostsContextType = useFetchPosts<IPosts>(
    `http://localhost:3000/posts/${id}`,
  )

  return (
    <>
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {data && (
        <section className="post">
          <div className="post-image">
            <img src={data.image} alt={data.title} height={500} />
          </div>
          <div className="container">
            <Link to="/" className="go-back">
              <ArrowLeft /> Voltar
            </Link>
            <article className="post-article">
              <h2 className="post-title">{data.title}</h2>

              <h2 className="subtitle">Descrição</h2>
              <p className="post-description">{data.description}</p>

              <h2 className="subtitle">Notícia</h2>
              <p className="post-description">
                {data.post.split('<br>').join('\n\n')}
              </p>
            </article>
          </div>
        </section>
      )}
    </>
  )
}

export default Article

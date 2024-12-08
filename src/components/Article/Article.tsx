import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Article.style.scss'
import useFetchPosts from '../../hooks/useFetchPosts'
import Loading from '../Loading/Loading.tsx'
import Error from '../Error/Error.tsx'
import Meta from '../Meta/Meta.tsx'

function Article({ id }: { id: string }) {
  const { data, loading, error } = useFetchPosts<IPosts>(
    `http://localhost:3000/posts/${id}`,
  )

  return (
    <>
      {data ? (
        <Meta
          title={`${data?.title}`}
          description="Artigo do blog NúcleoTech"
        />
      ) : (
        <Meta title="Artigo" description="Artigo do blog NúcleoTech" />
      )}
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && (
        <section className="post">
          {data.image ? (
            <div className="post-image">
              <img src={data.image} alt={data.title} height={500} />
            </div>
          ) : null}
          <div className="container">
            <Link to="/" className="go-back">
              <ArrowLeft /> Voltar
            </Link>
            <article className="post-article">
              <h2 className="post-title">{data.title}</h2>

              <h2 className="subtitle">Descrição</h2>
              <p className="post-description">{data.description}</p>

              <h2 className="subtitle">Notícia</h2>
              {data.post.split('<br>').map((textWithSpace) => (
                <p className="post-description">{textWithSpace}</p>
              ))}
            </article>
          </div>
        </section>
      )}
    </>
  )
}

export default Article

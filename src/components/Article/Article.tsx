import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Article.style.scss'
import useFetchPosts from '../../hooks/useFetchPosts'
import Loading from '../Loading/Loading.tsx'
import Error from '../Error/Error.tsx'
import Meta from '../Meta/Meta.tsx'
import { IPosts } from '../../interfaces/interfaces'

function Article({ id }: { id: string }) {
  const { data, loading, error } = useFetchPosts<IPosts>(
    `http://localhost:3000/posts/${id}`,
  )

  if (!data) {
    return (
      <>
        {error && <Error error={error} />}
        <Meta title="Artigo excluído" description="Artigo do blog NúcleoTech" />
      </>
    )
  }

  return (
    <>
      {loading && <Loading />}
      <Meta title={`${data.title}`} description="Artigo do blog NúcleoTech" />

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

            <h2 className="post-subtitle">Descrição</h2>
            <p className="post-description">{data.description}</p>

            <h2 className="post-subtitle">Notícia</h2>
            {data.post.split('<br>').map((textWithSpace) => (
              <p className="post-description">{textWithSpace}</p>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}

export default Article

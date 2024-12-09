import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './PostsCard.style.scss'
import Loading from '../Loading/Loading'
import useFetchPosts from '../../hooks/useFetchPosts'
import { Suspense, useEffect, useState } from 'react'
import Error from '../Error/Error'

function PostsCard({ input }: IPostCard) {
  const [filteredData, setFilteredData] = useState<null | IPosts[]>(null)
  const { data } = useFetchPosts<IPosts[]>('http://localhost:3000/posts')

  useEffect(() => {
    if (data) {
      setFilteredData(
        input
          ? data.filter((post: IPosts) =>
              post.title.toLowerCase().includes(input.toLowerCase()),
            )
          : data,
      )
    }
  }, [data, input])

  if (!data) {
    return (
      <>
        <Error error="Não foi possivel carregar os dados" />
      </>
    )
  }

  return (
    <>
      {filteredData?.length === 0 && (
        <Error error="Nenhum post foi encontrado, tente novamente" />
      )}
      <Suspense fallback={<Loading />}>
        {filteredData &&
          filteredData.map((post: IPosts) => (
            <section className="container" key={post.id}>
              <div className="posts">
                <Link to={`/post/${post.id}`} className="posts-link">
                  <div className="posts-heading">
                    <time>{post.date}</time>
                    <ArrowUpRight size={24} />
                  </div>
                  <article className="posts-article">
                    <h2 className="title">{post.title}</h2>
                    <p className="description">{post.description}</p>
                  </article>
                </Link>
              </div>
            </section>
          ))}
      </Suspense>
    </>
  )
}
export default PostsCard

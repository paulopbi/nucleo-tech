import { IPostCard, IPosts } from '../../interfaces/interfaces'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './PostsCard.style.scss'
import Loading from '../Loading/Loading'
import useFetchPosts from '../../hooks/useFetchPosts'
import { useEffect, useState } from 'react'
import Error from '../Error/Error'

function PostsCard({ input }: IPostCard) {
  const { data, loading, error } = useFetchPosts<IPosts[]>(
    'http://localhost:3000/posts',
  )
  const [filteredData, setFilteredData] = useState<null | IPosts[]>(null)

  useEffect(() => {
    if (data) {
      setFilteredData(
        input
          ? data.filter((post: IPosts) =>
              post.title.toLowerCase().includes(input.toLocaleLowerCase()),
            )
          : data,
      )
    }
  }, [data, input])

  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {filteredData?.length === 0 && (
        <Error error={'Nenhum post com esse titulo foi encontrado'} />
      )}
      {filteredData &&
        filteredData.map((post: IPosts) => (
          <section className="container article-container" key={post.id}>
            <article className="article">
              <Link to={`/post/${post.id}`}>
                <div className="article-date-container">
                  <time className="date">{post.date}</time>

                  <ArrowUpRight
                    size={30}
                    color="#fff"
                    className="article-arrow-icon"
                  />
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

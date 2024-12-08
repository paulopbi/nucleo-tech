import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './PostsCard.style.scss'
import Loading from '../Loading/Loading'
import useFetchPosts from '../../hooks/useFetchPosts'
import { useEffect, useState } from 'react'
import Error from '../Error/Error'
import deletePost from '../../helpers/deletePost'

function PostsCard({ input }: IPostCard) {
  const [filteredData, setFilteredData] = useState<null | IPosts[]>(null)
  const { data, loading, error } = useFetchPosts<IPosts[]>(
    'http://localhost:3000/posts',
  )

  useEffect(() => {
    if (data) {
      const moreThanFourPosts = data.length > 3

      if (moreThanFourPosts) {
        const deleteAllowedPost = data.filter(({ remove }) => remove === true)

        setTimeout(() => {
          deletePost(deleteAllowedPost)
        }, 240000)
      }
    }
  }, [data])

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
    </>
  )
}
export default PostsCard

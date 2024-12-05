import { createContext } from 'react'
import useFetchPosts from '../hooks/useFetchPosts'
import { PostsContextType } from '../interfaces/interfaces'

export const PostsContext = createContext<PostsContextType | null>(null)

export const GetPostsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, loading, error } = useFetchPosts('http://localhost:3000/posts')

  return (
    <PostsContext.Provider value={{ data, loading, error }}>
      {children}
    </PostsContext.Provider>
  )
}

interface IPosts {
  id: number
  liked: boolean
  title: string
  description: string
}

export interface PostsContextType {
  data: Post[] | null
  loading: boolean
  error: string | null
}

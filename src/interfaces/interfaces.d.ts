interface IPosts {
  id: number
  image: string
  liked: boolean
  title: string
  post: string
  description: string
}

export interface PostsContextType {
  data: IPosts | null
  loading: boolean | null
  error: string | null
}

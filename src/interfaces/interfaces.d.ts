interface IPosts {
  id: number
  image: string
  liked: boolean
  date: string
  title: string
  post: string
  description: string
}

export interface ISearch {
  setInput: React.Dispatch<React.SetStateAction<string>>
}

export interface IPostCard {
  input: string
}

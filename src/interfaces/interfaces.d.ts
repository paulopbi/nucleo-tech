export interface IPosts {
  id: number
  remove: boolean
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

export interface IMetaTag {
  title: string
  description: string
}

export interface IError {
  error: string
}

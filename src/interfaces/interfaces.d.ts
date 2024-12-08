interface IPosts {
  id: number
  remove: boolean
  image: string
  liked: boolean
  date: string
  title: string
  post: string
  description: string
}

interface ISearch {
  setInput: React.Dispatch<React.SetStateAction<string>>
}

interface IPostCard {
  input: string
}

interface IMetaTag {
  title: string
  description: string
}

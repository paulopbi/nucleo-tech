import { useEffect, useState } from 'react'
import { IPosts } from '../interfaces/interfaces'

function useFetchPosts(url: string) {
  const [data, setData] = useState<null | IPosts[]>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function getData(): Promise<void> {
      try {
        setLoading(true)
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Ocorreu um erro ao buscar os posts')
        }

        const data = await response.json()
        console.log(data)

        setData(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
          setData(null)
        }
      } finally {
        setLoading(false)
        setError('')
      }
    }
    getData()
  }, [url])
  return { data, loading, error }
}

export default useFetchPosts

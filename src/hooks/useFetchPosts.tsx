import { useEffect, useState } from 'react'

function useFetchPosts<T>(url: string) {
  const [data, setData] = useState<null | T>(null)
  const [loading, setLoading] = useState<null | boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    async function getData(): Promise<void> {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(
            'Ocorreu um erro ao buscar os dados, tente novamente!',
          )
        }

        const data = await response.json()
        setData(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
          setData(null)
        }
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [url])

  return { data, loading, error }
}

export default useFetchPosts

export default async function createPost(
  title: string,
  description: string,
  post: string,
  image: string,
) {
  let status: Response | null = null
  try {
    const req = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        remove: true,
        title,
        description,
        post,
        image,
        date: new Date().toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }),
      }),
    })

    if (!req.ok) {
      throw new Error(
        `Algo deu errado ao enviar os dados, status? ${req.status}`,
      )
    }

    status = req
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      status = null
    }
  }

  return {
    status,
  }
}

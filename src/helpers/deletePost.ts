export default async function deletePost() {
  try {
    const response = await fetch('http://localhost:3000/posts')
    const posts = await response.json()

    const postsToRemove = posts.filter((post: IPosts) => post.remove === true)

    if (postsToRemove.length !== 0) {
      for (const post of postsToRemove) {
        await fetch(`http://localhost:3000/posts/${post.id}`, {
          method: 'DELETE',
        })
      }
      console.log('Posts removidos: ', postsToRemove)
    } else {
      console.log('Não há nenhum post para ser removido.')
    }
  } catch (error) {
    console.error('Erro ao deletar posts: ', error)
  }
}

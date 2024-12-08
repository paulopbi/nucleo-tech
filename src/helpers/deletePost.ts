export default function deletePost(filtredPosts: IPosts[]) {
  if (filtredPosts.length === 0) {
    return
  } else {
    const postID = filtredPosts.map(({ id }) => id)
    fetch(`http://localhost:3000/posts/${postID}`, {
      method: 'DELETE',
    }).then(() => console.log(`Artigo ${postID} deletado com sucesso`))
  }
}

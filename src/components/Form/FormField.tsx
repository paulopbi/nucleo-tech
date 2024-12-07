import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FormField.style.scss'
import createPost from '../../helpers/createPost'
import Loading from '../Loading/Loading'
import { Pencil } from 'lucide-react'

function FormField() {
  const navigate = useNavigate()

  const [disabled, setDisabled] = useState(false)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [post, setPost] = useState<string>('')
  const [image, setImage] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setDisabled(true)
    const resp = await createPost(title, description, post, image)

    if (resp.status?.ok) {
      setDisabled(false)
      navigate('/')
      return <Loading />
    }
  }

  return (
    <section className="form-field">
      <div className="form-field-heading">
        <h1>Criar Artigo</h1>
        <p>
          Nessa sessão você poderá criar um post para o blog, basta preencher os
          campos abaixo, seu post ficará disponivél por 4 minutos e depois será
          apagado!
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-field-title">
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            id="title"
            placeholder="Escreva o titulo da matéria"
            onChange={({ target }) => setTitle(target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="image">Link da Imagem</label>
          <input
            type="url"
            id="image"
            placeholder="Digite o link (URL) da imagem aqui"
            onChange={({ target }) => setImage(target.value)}
            required
          />
        </div>

        <div className="form-field-description">
          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            rows={3}
            placeholder="Escreva a descrição da matéria"
            onChange={({ target }) => setDescription(target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="article">Matéria</label>
          <textarea
            name="post"
            id="article"
            placeholder="Escreva conteúdo da matéria"
            rows={5}
            onChange={({ target }) => setPost(target.value)}
            required
          />
        </div>

        <button
          type="submit"
          id="send-post"
          className="button"
          disabled={disabled}
        >
          Enviar Artigo
          <Pencil size={19} />
        </button>
      </form>
    </section>
  )
}

export default FormField

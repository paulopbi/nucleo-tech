import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LucidePencilLine } from 'lucide-react'
import './FormField.style.scss'
import createPost from '../../helpers/createPost'
import Loading from '../Loading/Loading'
import Meta from '../Meta/Meta'
import Error from '../Error/Error'

function FormField() {
  const [disabled, setDisabled] = useState(false)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [post, setPost] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setDisabled(true)
    const resp = await createPost(title, description, post, image)

    if (resp.status?.ok) {
      setDisabled(false)
      navigate('/')
      return <Loading />
    } else {
      return <Error error="Algo deu errado ao enviar os dados" />
    }
  }

  return (
    <>
      <Meta
        title="Criar Matéria"
        description="Página de criar post para o blog NúcleoTech"
      />
      <section className="form-field">
        <div id="form-field-heading">
          <h1 className="title">Criar Um Post</h1>
          <p className="text">
            Nessa sessão você poderá criar um post para o blog, basta preencher
            os campos abaixo, seu post ficará disponivél por 3 minutos e depois
            será excluido!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div id="form-field-title">
            <label htmlFor="title">
              Titulo <span>máximo de 100 caracteres.</span>
            </label>
            <input
              type="text"
              id="title"
              minLength={5}
              maxLength={100}
              placeholder="Escreva o titulo da matéria"
              onChange={({ target }) => setTitle(target.value)}
              required
            />
          </div>

          <div id="form-field-image">
            <label htmlFor="image">
              Link da Imagem <span>se não tiver a URL, deixe em branco.</span>
            </label>
            <input
              type="url"
              id="image"
              placeholder="Digite o link (URL) da imagem aqui"
              onChange={({ target }) => setImage(target.value)}
            />
          </div>

          <div id="form-field-description">
            <label htmlFor="description">
              Descrição <span>máximo de 500 caracteres.</span>{' '}
            </label>
            <textarea
              name="description"
              id="description"
              minLength={5}
              maxLength={500}
              rows={3}
              placeholder="Escreva a descrição da matéria"
              onChange={({ target }) => setDescription(target.value)}
              required
            />
          </div>

          <div id="form-field-article">
            <label htmlFor="article">Matéria do Artigo</label>
            <textarea
              name="post"
              id="article"
              placeholder="Escreva conteúdo da matéria"
              minLength={5}
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
            <LucidePencilLine size={19} />
          </button>
        </form>
      </section>
    </>
  )
}

export default FormField

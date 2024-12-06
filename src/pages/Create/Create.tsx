import Header from '../../components/Header/Header'
import './Create.style.scss'

function Create() {
  return (
    <>
      <Header />

      <section className="create">
        <div className="create-heading">
          <h1>Criar Artigo</h1>
          <p>
            Nessa sessão você poderá criar um post para o blog, basta preencher
            os campos abaixo, seu post ficará disponivél por 4 minutos e depois
            será apagado!
          </p>
        </div>
        <form>
          <div className="create-title">
            <label htmlFor="title-post">Titulo</label>
            <input
              type="text"
              id="title-post"
              placeholder="Escreva o titulo da matéria"
            />
          </div>

          <div className="create-description">
            <label htmlFor="description-post">Descrição</label>
            <textarea
              name="description"
              id="description-post"
              rows={3}
              placeholder="Escreva a descrição da matéria"
            />
          </div>

          <div>
            <label htmlFor="article-post">Matéria</label>
            <textarea
              name="post"
              id="article-post"
              placeholder="Escreva conteúdo da matéria"
              rows={5}
            />
          </div>

          <button type="button" id="send-post">
            Enviar Texto
          </button>
        </form>
      </section>
    </>
  )
}

export default Create

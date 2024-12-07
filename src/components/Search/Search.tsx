import { Newspaper } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ISearch } from '../../interfaces/interfaces'
import './Search.style.scss'

function Search({ setInput }: ISearch) {
  return (
    <div className="input-container">
      <input
        type="search"
        name="search"
        id="search-input"
        placeholder="Pesquisar por artigo"
        onChange={({ target }) => setInput(target.value)}
      />
      <Link to="/create" className="button input-button">
        Criar Um Post
        <Newspaper size={16} />
      </Link>
    </div>
  )
}

export default Search

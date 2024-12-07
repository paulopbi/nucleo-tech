import { Newspaper } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Search.style.scss'

function Search() {
  return (
    <div className="input-container">
      <input
        type="search"
        name="search"
        id="search-input"
        placeholder="Pesquisar no blog"
      />
      <Link to="/create" className="button input-button">
        Criar Um Post
        <Newspaper size={16} />
      </Link>
    </div>
  )
}

export default Search

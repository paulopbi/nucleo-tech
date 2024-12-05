import './Header.style.scss'

function Header() {
  return (
    <header className="header">
      <section className="header-content container">
        <div>
          <h1 className="brand">
            The <span className="brand-detail">Revista</span>
          </h1>
        </div>
        <div className="input-container">
          <input
            type="search"
            name="search"
            id="search-input"
            placeholder="Pesquisar no blog"
          />
        </div>
      </section>
    </header>
  )
}

export default Header

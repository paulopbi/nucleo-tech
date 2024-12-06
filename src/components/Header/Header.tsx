import { Link } from 'react-router-dom'
import Brand from '../Brand/Brand'
import './Header.style.scss'

function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="header">
      <section className="header-content container">
        <Link to="/">
          <Brand />
        </Link>
        {children}
      </section>
    </header>
  )
}

export default Header

import { Github, Linkedin } from 'lucide-react'
import './Footer.style.scss'

function Footer() {
  const yearNow = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div>
          <p>
            &copy; {yearNow} - Criado por Paulo Victor, Alguns direitos
            reservados.
          </p>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/paulopbi/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/paulopbi"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

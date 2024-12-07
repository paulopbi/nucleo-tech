import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import Home from './pages/Home/Home.tsx'
import Post from './pages/Post/Post.tsx'
import Create from './pages/Create/Create.tsx'
import Footer from './components/Footer/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="create" element={<Create />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './GlobalStyles.scss'
import Home from './pages/Home/Home.tsx'
import Post from './pages/Post/Post.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

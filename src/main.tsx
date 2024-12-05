import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './GlobalStyles.scss'
import Home from './pages/Home/Home.tsx'
import { GetPostsProvider } from './context/PostsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GetPostsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GetPostsProvider>
  </StrictMode>,
)

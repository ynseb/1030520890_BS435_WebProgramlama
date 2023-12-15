import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import Game1 from './pages/Game1'
import Game2 from './pages/Game2'
import NoPage from './pages/NoPage'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <> 
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game1" element={<Game1 />} />
          <Route path="/game2" element={<Game2 />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </>   
      </BrowserRouter>
    </div>
  )
}
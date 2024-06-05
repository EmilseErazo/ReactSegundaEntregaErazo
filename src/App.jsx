import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import NavBar from './components/NavBar'
import Error from './components/Error'

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/ :category' element={(<Products />)} />
        <Route path='/products' element={(<Products />)} />
        <Route path='/*' element={<Error />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import '../src/index.css';
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Navigations from './Components/Navgations/Navigations'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigations></Navigations>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App

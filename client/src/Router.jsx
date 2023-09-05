import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Users from './components/Users'
import Products from './components/Products'
import Footer from './components/Footer'

const Router = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/users' element={<Users/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Router
import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Home from './Pages/Home'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import  Product from './Pages/Product'


const App = () => {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
      <Container>
        <Route  path="/" component={Home}  exact />
        <Route  path ="./Pages/Product" component={Product} />
      </Container>
      </main>
      <Footer/>
    </Router> 
  )
}

export default App

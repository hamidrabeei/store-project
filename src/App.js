import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Header/>
      <main className='py-3'>
      <Container>
        <Home></Home>
      </Container>
      </main>
      <Footer/>
    </div>
  )
}

export default App

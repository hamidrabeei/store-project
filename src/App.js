import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <main className='py-3'>
      <Container>
        <h2>Fc Market</h2>
      </Container>
      </main>
      <Footer/>
    </div>
  )
}

export default App

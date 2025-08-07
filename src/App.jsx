import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Header>
        <Nav></Nav>
      </Header>
      <Main/>
      <Footer/>
    </>
  )
}

export default App

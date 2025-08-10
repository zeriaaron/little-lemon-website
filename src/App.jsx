import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>

      {/* Routing */}
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

      <Footer/>
    </>
    // Updating the navigation to match the req of Single Page Applications principle
    // npm i react-router-dom
    // import Browser Router from react-router-dom [main.jsx]
    // import Routes, Route from react-router-dom [here]
    // use Link instead of li [Nav.jsx]
    // Learned: Put Routes in betwen the Header and Footer to do "like" a conditional rendering components
  )
}

export default App

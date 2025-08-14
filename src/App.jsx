import './App.css'
import Home from './pages/Home'
import Book from './pages/Book'
import ConfirmedBookingPage from './pages/ConfirmedBookingPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/* Routing */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/confirmation' element={<ConfirmedBookingPage/>}/>
      </Routes>
    </>
    // Updating the navigation to match the req of Single Page Applications principle
    // npm i react-router-dom
    // import Browser Router from react-router-dom [main.jsx]
    // import Routes, Route from react-router-dom [here]
    // use Link instead of li [Nav.jsx]
  )
}

export default App

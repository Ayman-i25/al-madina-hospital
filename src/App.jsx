
import { ThemeProvider } from '@mui/material'
import './App.css'
import Header from './Components/Header'
import { theme } from '../theme'
import { Route, Routes } from 'react-router-dom'
import Home from '/src/pages/Home/Home'
import Contact from '/src/pages/contact/Contact'
function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <Header />
    <Routes>
      <Route path='/home' Component={Home} />
      <Route path='/contact' Component={Contact} />
    </Routes>
    </ThemeProvider>

    </>
  )
}

export default App

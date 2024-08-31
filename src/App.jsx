
import { Box, ThemeProvider } from '@mui/material'
import './App.css'
import Header from './Components/Header'
import { LTRtheme, RTLtheme } from '../theme'
import { Route, Routes } from 'react-router-dom'
import Home from '/src/pages/Home/Home'
import './i18n'
import { useTranslation } from 'react-i18next'
import Footer from './Components/Footer'
import Department from './Components/Department'
import DepartmentPage from './pages/DepartmentsPage/DepartmentsPage'
import DepartmentSingle from './pages/DepartmentSingle/DepartmentSingle'
import Doctors from './pages/doctors/Doctors'
import SingleDoctors from './pages/SingleDoctors/SingleDoctors'
import ContactPage from './pages/contact/ContactPage'
function App() {
  const { i18n } = useTranslation();
  const isRtl = i18n.language
  return (
    <>
      <Box sx={{ direction: isRtl === 'en' ? 'ltr' : 'rtl' }}>
        <ThemeProvider theme={isRtl === 'en' ? LTRtheme : RTLtheme}>
          <Header />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/departments' element={<DepartmentPage />} />
            <Route path='/departments/:departmentId' element={<DepartmentSingle />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/doctors/:doctorId' element={<SingleDoctors />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>

          <Footer />
        </ThemeProvider>

      </Box>
    </>
  )
}

export default App

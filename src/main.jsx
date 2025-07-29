import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './page/layout.jsx'
import Home from './page/home.jsx'
import About from './page/about.jsx'
import ContactUs from './page/contactus.jsx'
import Leadership from './page/leadership.jsx'
import Update from './page/update.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} >
          <Route index element={<Home />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/leadership' element={<Leadership />} />
          <Route path='/update' element={<Update />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import App from "./App"
import IndPoke from './pokemon'
import Footer from "./footer";
import { FilterProvider } from './context/filterContext'
import Index from '.'
createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/veredex/'>
  <StrictMode >
    <>
    <Routes>
    <Route index element={<Index />} />

    </Routes>
    <Footer />
    </>
  </StrictMode>
  </BrowserRouter>
)

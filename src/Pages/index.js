import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/index'
import Login from './Login/index'
import Contact from './Contact/index'

function index() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

const NoPage = () => {
    return <h1>404</h1>;
  };
  


export default index
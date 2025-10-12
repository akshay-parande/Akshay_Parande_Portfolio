import { useState } from 'react'
import { Header,Footer } from './components/Index'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <div className='min-h-lvh p-3 justify-center items-center bg-[#1a1a2e]'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App

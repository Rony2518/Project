import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Main from '../Components/Main'
import CompanyInfo from '../Components/CompanyInfo'
import BestSeller from '../Components/BestSeller'
import Footer from '../Components/Footer'
import DealOfTheDay from '../Components/DealOfTheDay'
import './App.css'

function App() {

  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <Main />
      <CompanyInfo />
      <BestSeller />
      <DealOfTheDay />
      <Footer />
    </>
  )
}

export default App

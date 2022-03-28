import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../conponentPageClient/Banner'
import CateBox from '../conponentPageClient/CateBox'
import Footer from '../conponentPageClient/Footer'
import Header from '../conponentPageClient/Header'
import Highlight from '../conponentPageClient/Highlight'
import Hot from '../conponentPageClient/Hot'
import Service from '../conponentPageClient/Service'

type Props = {}

const ClientLayout = (props: Props) => {
  return (
    <div className='bg-red-700'>
      <header>
        <Header />

      </header>
      <Banner />
      <Highlight />
      <CateBox />
      <main>
        <Outlet />
      </main>
      <Hot />
      <Service />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default ClientLayout
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { listCategory } from '../../api/category'
import { CategoryType } from '../../types/category'
import Banner from '../conponentPageClient/Banner'
import CateBox from '../conponentPageClient/CateBox'
import Footer from '../conponentPageClient/Footer'
import Header from '../conponentPageClient/Header'
import Highlight from '../conponentPageClient/Highlight'
import Hot from '../conponentPageClient/Hot'
import Service from '../conponentPageClient/Service'

type Props = {
  category: CategoryType[]
}
const ClientLayout = (props: Props) => {
  return (
    <div className='bg-red-700'>
      <header className='bg-red-700'>
        <Header category={props.category} />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default ClientLayout
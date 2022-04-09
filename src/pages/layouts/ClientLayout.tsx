import { Outlet } from 'react-router-dom'
import { CategoryType } from '../../types/category'
import Footer from '../conponentPageClient/Footer'
import Header from '../conponentPageClient/Header'

type Props = {
  category: CategoryType[],
  search: (key: string) => void
}
const ClientLayout = (props: Props) => {
  return (
    <div className='bg-red-700'>
      <header className='bg-red-700'>
        <Header category={props.category} search={props.search} />
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
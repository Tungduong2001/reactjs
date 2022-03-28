import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderDashboard from '../componentPageAdmin/HeaderDashBoard'

type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <div className='asdads asdasd'>
            <header>
                <HeaderDashboard />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout
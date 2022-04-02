import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../utils/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    if (isAuthenticate()) {
        const { user: { role } } = isAuthenticate()
        if (!role) {
            toast.error("Bạn không có quyền truy cập")
            return <Navigate to="/" />
        }
    } else {
        toast.error("Bạn không có quyền truy cập")
        return <Navigate to="/" />
    }

    return (<div>
        {props.children}
        <ToastContainer />
    </div>

    )
}

export default PrivateRouter
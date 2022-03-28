import { useEffect, useState } from 'react'
import logo from './logo.svg'

import ShowInfo from './components/ShowInfo'

import type { ProductType } from './types/product'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import ClientLayout from './pages/layouts/ClientLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import DashboardPage from './pages/DashboardPage'
import ProductManage from './pages/ProductManage'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/ProductAdd'
import { add, list, remove, update } from './api/product'
import ProductEdit from './pages/ProductEdit'
import PrivateRouter from './components/PrivateRouter'
import Signup from './pages/Signup'
import { UserType } from './types/user'
import { signin, signup } from './api/user'
import Signin from './pages/Signin'
function App() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [users, setUsers] = useState<UserType[]>([]);
    const [auth, setAuth] = useState<any>({})

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
        }
        getProducts();

        const authInfo = localStorage.getItem("user") as string
        setAuth(JSON.parse(authInfo))
    }, []);

    const onHandleAdd = async (product: any) => {
        // console.log('app,js', product);
        const { data } = await add(product)
        setProducts([...products, data])
    }
    const onHandleRemove = async (id: number) => {
        remove(id)
        setProducts(products.filter(item => item._id !== id))
    }
    const onHandleUpdate = async (product: ProductType) => {
        try {
            const { data } = await update(product)
            setProducts(products.map(item => item._id === data._id ? product : item))
        } catch (error) {

        }
    }


    return (
        <div className='App'>
            {/* <header>
                <ul className='flex justify-center gap-10'>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? "text-indigo-700" : "")}>HomePage</NavLink></li>
                    <li><NavLink to="product" className={({ isActive }) => (isActive ? "text-indigo-700" : "")}>Product</NavLink></li>
                    <li><NavLink to="about" className={({ isActive }) => (isActive ? "text-indigo-700" : "")}>About</NavLink></li>
                </ul>
            </header>

            <div className='text-[brown]'>{auth && auth.name}</div> */}

            <main>
                <Routes>
                    <Route path='/' element={<ClientLayout />}>
                        <Route index element={<HomePage products={products} />} />
                        <Route path='product'>
                            <Route index element={<ProductPage />} />
                            <Route path=':id' element={<ProductDetail />} />
                        </Route>
                        <Route path='about' element={<AboutPage />} />
                    </Route>
                    <Route path='admin' element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
                        <Route index element={<Navigate to="/admin/dashboard" />} />
                        <Route path='dashboard' element={<DashboardPage />} />
                        <Route path='product' >
                            <Route index element={<ProductManage products={products} onRemove={onHandleRemove} />} />
                            <Route path="edit/:id" element={<ProductEdit onUpdate={onHandleUpdate} />} />
                            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
                        </Route>
                    </Route>
                    <Route path='login' element={<Signin />} />
                    <Route path='signup' element={<Signup />} />
                </Routes>
            </main>
        </div>
    )
}

export default App

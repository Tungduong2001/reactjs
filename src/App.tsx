import { useEffect, useState } from 'react'
import type { ProductType } from './types/product'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import ClientLayout from './pages/layouts/ClientLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import DashboardPage from './pages/DashboardPage'
import ProductManage from './pages/ProductManage'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/ProductAdd'
import { add, list, remove, searchProduct, update } from './api/product'
import ProductEdit from './pages/ProductEdit'
import PrivateRouter from './components/PrivateRouter'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CategoryType } from './types/category'
import { addCategory, listCategory, removeCategory } from './api/category'
import Category from './pages/Category'
import CategoryPage from './pages/CategoryPage'
import UserManage from './pages/UserManage'
import { UserType } from './types/user'
import { ListUsers, removeUser } from './api/user'
import Search from './pages/FormSearch'
import SearchPage from './pages/SearchPage'
function App() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [category, setCategories] = useState<CategoryType[]>([]);
    const [users, setUsers] = useState<UserType[]>([]);
    const [search, setSearch] = useState<ProductType[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
        }
        getProducts();

        const getCategory = async () => {
            const { data } = await listCategory();
            setCategories(data)
        }
        getCategory();

        const getUser = async () => {
            const { data } = await ListUsers();
            console.log(data);

            setUsers(data)
        }
        getUser();
    }, []);

    const onHandleAdd = async (product: any) => {
        // console.log('app,js', product);
        const { data } = await add(product)
        toast.success(`Thêm sản phẩm ${product.name} thành công`)
        setProducts([...products, data])
    }
    const onHandleRemove = async (id: number) => {
        const confirm = window.confirm('Bạn có muốn xóa không?');
        if (confirm) {
            remove(id)
            setProducts(products.filter(item => item._id !== id))
        }
    }
    const onHandleUpdate = async (product: ProductType) => {
        try {
            const { data } = await update(product)
            toast.success(` Cập nhật sản phẩm thành công`)
            setProducts(products.map(item => item._id === data._id ? product : item))
        } catch (error) {

        }
    }

    const onHandleAddCate = async (categories: CategoryType) => {
        const { data } = await addCategory(categories)
        toast.success(` Thêm  ${categories.name} thành công`)
        setCategories([...category, data])
    }
    const onHandleRemoveCate = (id: number) => {
        const confirm = window.confirm('Bạn có muốn xóa không?');
        if (confirm) {
            removeCategory(id);
            setCategories(category.filter(item => item._id !== id))
        }
    }

    const onHandleRemoveUser = (id: number) => {
        const confirm = window.confirm('Bạn có muốn xóa không?');
        if (confirm) {
            removeUser(id)
            setUsers(users.filter(item => item._id !== id))
        }
    }

    const onHandleSearch = async (key: string) => {
        const { data } = await searchProduct(key)

        setSearch(data)
    }
    return (
        <div className='App'>
            {/* <header>
                <ul className='flex justify-center gap-10'>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? "text-indigo-700" : "")}>HomePage</NavLink></li>
                    <li><NavLink to="product" className={({ isActive }) => (isActive ? "text-indigo-700" : "")}>Product</NavLink></li>
                    <li><NavLink to="about" className={({ isActive }) => (isActive ? "text-indigo-700" : "")}>About</NavLink></li>
                </ul>
            </header> */}

            {/* <div className='text-[brown]'>{auth && auth.name}</div> */}

            <main>
                <Routes>
                    <Route path='/' element={<ClientLayout category={category} search={onHandleSearch} />}>
                        <Route index element={<HomePage products={products} />} />
                        <Route path='product'>
                            <Route index element={<ProductPage />} />
                            <Route path=':id' element={<ProductDetail />} />
                        </Route>
                        <Route path='about' element={<AboutPage />} />
                        <Route path='category/:id' element={<CategoryPage />} />
                        <Route path='search' element={<SearchPage product={search} />} />
                    </Route>
                    <Route path='admin' element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
                        <Route index element={<Navigate to="/admin/dashboard" />} />
                        <Route path='dashboard' element={<DashboardPage />} />
                        <Route path='product' >
                            <Route index element={<ProductManage products={products} onRemove={onHandleRemove} />} />
                            <Route path="edit/:id" element={<ProductEdit onUpdate={onHandleUpdate} category={category} />} />
                            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} category={category} />} />
                        </Route>
                        <Route path='users'>
                            <Route index element={<UserManage users={users} onRemove={onHandleRemoveUser} />} />
                        </Route>
                        <Route path='category'>
                            <Route index element={<Category onRemoveCategory={onHandleRemoveCate} category={category} onAddCategory={onHandleAddCate} />} />
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

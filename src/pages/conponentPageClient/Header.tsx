import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { isAuthenticate } from '../../utils/localStorage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CategoryType } from '../../types/category';
type Props = {
    category: CategoryType[]
}

const Header = (props: Props) => {
    console.log(props.category);

    const navigate = useNavigate()
    const logout = () => {
        toast.success("Đăng xuất thành công")
        localStorage.removeItem('user')
        setTimeout(() => {
            navigate('/login')
        }, 1000)
    }
    return (
        <div>
            <div className="header-top bg-red-700 flex justify-between h-[80px] w-[1200px] m-auto">
                <figure className="logo pt-5">
                    <NavLink to="/">
                        <img src="https://fptshop.com.vn/Content/Landing/logo-mb.png" width="150px" />
                    </NavLink>
                </figure>
                <form action="/search" className="w-[700px] mt-5 pl-10 flex ">
                    <input name="keyword" type="text" className="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" />
                    <button className="h-10"><i className="fas fa-search bg-[#333333] text-white py-3 px-4 rounded-sm" /></button>
                </form>
                <div className="flex mt-5 text-center">
                    <div className="news pr-5 ">
                        <NavLink to=''>
                            <i className="far fa-file-alt text-white " />
                            <p className="text-white text-xs">Thông tin hay</p>
                        </NavLink>
                    </div>
                    <div className="water pr-5">
                        <NavLink to=''>
                            <p>
                                <i className="fas fa-tint text-white" />
                                <i className="fas fa-bolt text-white" />
                            </p>
                            <p className="text-white text-xs">Thu hộ điện nước</p>
                        </NavLink>
                    </div>
                    <div className="cart">
                        <NavLink to="/cart">
                            <i className="fas fa-shopping-cart text-white" />
                            <p className="text-white text-xs">Giỏ hàng</p>
                        </NavLink>
                    </div>
                    <div className="signin pl-5">
                        {isAuthenticate() ?
                            <div>
                                {isAuthenticate().user.role == 1 ?
                                    <div>
                                        <Link to="/admin">
                                            <i className="fas fa-user text-white" />
                                            <p className="text-white text-xs">{isAuthenticate().user.name}</p>
                                        </Link>
                                        <Link to=''><p onClick={() => logout()
                                        } className='opacity-0 hover:opacity-100 text-white text-xs'>Đăng xuất</p></Link>
                                    </div>
                                    : <div>
                                        <Link to="/">
                                            <i className="fas fa-user text-white" />
                                            <p className="text-white text-xs">{isAuthenticate().user.name}</p>
                                        </Link>
                                        <Link to=''><p onClick={() => logout()
                                        } className='opacity-0 hover:opacity-100 text-white text-xs'>Đăng xuất</p></Link>
                                    </div>
                                }

                            </div>

                            : <Link to="/login">
                                <i className="fas fa-user text-white" />
                                <p className="text-white text-xs">Đăng Nhập</p>
                            </Link>}

                    </div>
                </div>
            </div>
            <div className="min-w-full mx-auto bg-[#252525]">
                <nav className="w-[1200px] mx-auto  text-white" id="navbar">
                    <ul className="flex justify-around py-3 relative">
                        <li className="group">
                            <NavLink to="" className="nav-bar">
                                <i className="fas fa-mobile-alt mr-1" />
                                <span className=''>Điện thoại</span>
                            </NavLink>
                            <div className="grid grid-cols-3 gap-x-64 mt-0 w-full border-2 max-h-[300px] absolute left-0  bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500 ">
                                <ul className="menu-item w-[500px]">
                                    <li className="menu-item-title">HÃNG SẢN XUẤT</li>
                                    <div className="menu-item-info grid grid-cols-3 text-sm leading-7 mb-4">
                                        {props.category?.map((item, index) => {
                                            return (
                                                <div key={index}><a href={`/category/${item._id}`}>{item.name}</a></div>
                                            )
                                        })}
                                    </div>
                                    <li className="menu-item-title"><NavLink to=''>ĐỒNG HỒ THÔNG MINH</NavLink></li>
                                    <div className="menu-item-info grid grid-cols-3 text-sm leading-7 ">

                                    </div>
                                </ul>
                                <div className="text-black">
                                    <p className="pl-5 pt-3 uppercase ml-6 font-bold">Bán chạy nhất</p>
                                    <div className="flex w-[400px]">
                                        <div className="w-[100px] ml-8 mt-2">
                                            <NavLink to=''>
                                                <img src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/16/637620445702136793_samsung-galaxy-a22-5g-den-dd.jpg" />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink to=''><p className="text-sm mb-2 mt-2">Samsung Galaxy A22 5G</p></NavLink>
                                            <span className="font-bold text-red-700">5.690.000 ₫</span>
                                        </div>
                                    </div>
                                    <div className="flex w-[400px]">
                                        <div className="w-[100px] ml-8 mt-2">
                                            <NavLink to=''>
                                                <img src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/15/637699137820447063_oppo-a55-dd.jpg" />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink to=''><p className="text-sm mb-2 mt-2">OPPO A55 4GB-64GB</p></NavLink>
                                            <span className="font-bold text-red-700">4.990.000 ₫</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-8">
                                    <NavLink to=''>
                                        <img className="w-[230px] float-right pr-8" src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/8/637772392778576314_F-H4_248x248.png" />
                                    </NavLink>
                                </div>
                            </div>
                        </li>
                        <li className="group">
                            <NavLink to="/laptop" className="nav-bar">
                                <i className="fas fa-laptop" />
                                <span className=''>laptop</span>
                            </NavLink>
                            <div className="grid grid-cols-3 gap-x-64 mt-0 w-full border-2 max-h-[300px] absolute left-0  bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500 ">
                                <ul className="menu-item w-[500px]">
                                    <li className="menu-item-title">HÃNG SẢN XUẤT</li>
                                    <div className="menu-item-info grid grid-cols-3 text-sm leading-7 mb-4">

                                    </div>
                                    <li className="menu-item-title"><NavLink to=''>PHẦN MỀM</NavLink></li>
                                    <div className="menu-item-info grid grid-cols-3 text-sm leading-7 ">
                                        <li><NavLink to=''>Diệt Virus</NavLink></li>
                                        <li><NavLink to=''>Microsoft Office</NavLink></li>
                                        <li><NavLink to=''>Windows</NavLink></li>
                                        <li><NavLink to=''>Phần mềm khác</NavLink></li>
                                    </div>
                                </ul>
                                <div className="text-black">
                                    <p className="pl-5 pt-3 uppercase ml-6 font-bold">Bán chạy nhất</p>
                                    <div className="flex w-[400px]">
                                        <div className="w-[100px] ml-8 mt-2">
                                            <NavLink to=''>
                                                <img src="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/15/637751569796016673_acer-nitro-gaming-an515-45-den-dd.jpg" />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink to=''><p className="text-sm mb-2 mt-6">Laptop Acer Nitro Gaming</p></NavLink>
                                            <span className="font-bold text-red-700">21.599.100 ₫</span>
                                        </div>
                                    </div>
                                    <div className="flex w-[400px]">
                                        <div className="w-[100px] ml-8 mt-2">
                                            <NavLink to=''>
                                                <img src="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/7/637639339928194488_msi-gaming-gf63-den-dd.jpg" />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink to=''><p className="text-sm mb-2 mt-6">Laptop MSI Gaming GF63</p></NavLink>
                                            <span className="font-bold text-red-700">18.899.100₫</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-8">
                                    <NavLink to=''>
                                        <img className="w-[230px] float-right pr-8" src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/21/637783691776655508_F-H4_248x248.png" />
                                    </NavLink>
                                </div>
                            </div>
                        </li>
                        <li className="group">
                            <NavLink to='' className="nav-bar">
                                <i className="fab fa-apple mr-1" />
                                <span className=''>apple</span>
                            </NavLink>
                            <div className="grid grid-cols-3 gap-x-64 mt-0 w-full border-2 max-h-[300px] absolute left-0  bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500 ">
                                <ul className="menu-item w-[500px]">
                                    <li className="menu-item-title">CÁC SẢN PHẨM APPLE</li>
                                    <div className="menu-item-info grid grid-cols-3 text-sm leading-7 mb-4">
                                        <li><NavLink to=''>iPhone</NavLink></li>
                                        <li><NavLink to=''>iPad</NavLink></li>
                                        <li><NavLink to=''>MacBook</NavLink></li>
                                        <li><NavLink to=''>Apple Watch</NavLink></li>
                                        <li><NavLink to=''>Apple Tai nghe</NavLink></li>
                                        <li><NavLink to=''>iMac</NavLink></li>
                                        <li><NavLink to=''>Mac Mini</NavLink></li>
                                        <li><NavLink to=''>Sạc &amp; Cáp</NavLink></li>
                                        <li><NavLink to=''>Ốp lưng &amp; Bao da</NavLink></li>
                                        <li><NavLink to=''>Apple TV</NavLink></li>
                                        <li><NavLink to=''>Bàn phím</NavLink></li>
                                        <li><NavLink to=''>Chuột &amp; Trackpad</NavLink></li>
                                        <li><NavLink to=''>AirTag</NavLink></li>
                                        <li><NavLink to=''>Hàng dự án</NavLink></li>
                                    </div>
                                </ul>
                                <div className="text-black">
                                    <p className="pl-5 pt-3 uppercase ml-6 font-bold">Bán chạy nhất</p>
                                    <div className="flex w-[400px]">
                                        <div className="w-[100px] ml-8 mt-2">
                                            <NavLink to=''>
                                                <img src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673213598401263_iphone-13-pro-max-dd-1.jpg" />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink to=''><p className="text-sm mb-2 mt-2">iPhone 13 Pro Max 128GB</p></NavLink>
                                            <span className="font-bold text-red-700">31.490.000 ₫</span>
                                        </div>
                                    </div>
                                    <div className="flex w-[400px]">
                                        <div className="w-[100px] ml-8 mt-2">
                                            <NavLink to=''>
                                                <img src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673224696649012_iphone-13-dd-1.jpg" />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink to=''><p className="text-sm mb-2 mt-2">iPhone 13 128GB</p></NavLink>
                                            <span className="font-bold text-red-700">22.990.000 ₫</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-8">
                                    <NavLink to=''>
                                        <img className="w-[230px] float-right pr-8" src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/21/637783204821197848_F-H4_248x248.png" />
                                    </NavLink>
                                </div>
                            </div>
                        </li>
                        <li className="group">
                            <NavLink to='' className="nav-bar">
                                <i className="fas fa-desktop mr-1" />
                                <span className=''>pc-linh kiện</span>
                            </NavLink>
                            <div className=" gap-x-64 mt-0 border-2 max-h-[300px] absolute w-[200px]  bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500 ">
                                <ul className="menu-item">
                                    <div className="menu-item-info text-sm leading-7 mb-4">
                                        <li><NavLink to=''>iPhone</NavLink></li>
                                        <li><NavLink to=''>iPad</NavLink></li>
                                        <li><NavLink to=''>MacBook</NavLink></li>
                                        <li><NavLink to=''>Apple Watch</NavLink></li>
                                        <li><NavLink to=''>Apple Tai nghe</NavLink></li>
                                        <li><NavLink to=''>iMac</NavLink></li>
                                    </div>
                                </ul>
                            </div>
                        </li>
                        <li className="group">
                            <NavLink to='' className="nav-bar">
                                <i className="fas fa-headphones" />
                                <span className=''>phụ kiện</span>
                            </NavLink>
                            <div className="grid grid-cols-3 gap-x-64 mt-0 w-full border-2 max-h-[300px] absolute left-0  bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500 ">
                                <ul className="menu-item w-[500px]">
                                    <li className="menu-item-title">CÁC SẢN PHẨM PHỤ KIỆN</li>
                                    <div className="menu-item-info grid grid-cols-3 text-sm leading-7 mb-4">
                                        <li><NavLink to=''>Router</NavLink></li>
                                        <li><NavLink to=''>Bao da ốp lưng</NavLink></li>
                                        <li><NavLink to=''>Sạc dự phòng</NavLink></li>
                                        <li><NavLink to=''>Thẻ nhớ</NavLink></li>
                                        <li><NavLink to=''>Miếng dán màn hình</NavLink></li>
                                        <li><NavLink to=''>Loa</NavLink></li>
                                        <li><NavLink to=''>USB - Ổ cứng</NavLink></li>
                                        <li><NavLink to=''>Sạc cáp</NavLink></li>
                                        <li><NavLink to=''>Tai nghe</NavLink></li>
                                        <li><NavLink to=''>Chuột</NavLink></li>
                                        <li><NavLink to=''>Bàn phím</NavLink></li>
                                        <li><NavLink to=''>Bàn ghế gaming</NavLink></li>
                                        <li><NavLink to=''>Balo - Túi xách</NavLink></li>
                                        <li><NavLink to=''>TV BOX</NavLink></li>
                                        <li><NavLink to=''>Phụ kiện khác</NavLink></li>
                                        <li><NavLink to=''>Phụ kiện khẩu trang lọc khí</NavLink></li>
                                        <li><NavLink to=''>Bàn phím</NavLink></li>
                                    </div>
                                </ul>
                                <div className="text-black">
                                    <p className="pl-5 pt-3 uppercase ml-6 font-bold">Bán chạy nhất</p>
                                    <div className="flex w-[400px]">
                                        <div className="w-[100px] ml-8 mt-2">
                                            <NavLink to=''>
                                                <img src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2019/6/17/636963759454365620_HASP-00554636-dd-1.png" />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink to=''><p className="text-sm mb-2 mt-2 ml-5">Combo Loa Bluetooth Karaoke + Mic không dây</p></NavLink>
                                            <span className="font-bold text-red-700 ml-5">1.395.000 ₫</span>
                                        </div>
                                    </div>
                                    <div className="flex w-[400px]">
                                        <div className="w-[100px] ml-8 mt-2 ">
                                            <NavLink to=''>
                                                <img src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/1/14/637146111983706760_Trip10000_Black.jpg" />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink to=''><p className="text-sm mb-2 mt-2 ml-7">Pin sạc dự phòng Quick Charge Li-polymer 10000mAH</p></NavLink>
                                            <span className="font-bold text-red-700 ml-7">449.000 ₫</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-8">
                                    <NavLink to=''>
                                        <img className="w-[230px] float-right pr-8" src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/21/637783204821197848_F-H4_248x248.png" />
                                    </NavLink>
                                </div>
                            </div>
                        </li>
                        <li className="group">
                            <NavLink to='' className="nav-bar">
                                <i className="fas fa-undo-alt mr-1" />
                                <span className=''>máy cũ giá rẻ</span>
                            </NavLink>
                        </li>
                        <li className="group">
                            <NavLink to='' className="nav-bar">
                                <i className="fas fa-laptop-house mr-1" />
                                <span className=''>hàng gia dụng</span>
                            </NavLink>
                        </li>
                        <li className="group">
                            <NavLink to='' className="nav-bar">
                                <i className="fas fa-sd-card mr-1" />
                                <span className=''>sim thẻ</span>
                            </NavLink>
                        </li>
                        <li className="group">
                            <NavLink to='' className="nav-bar">
                                <i className="fas fa-percent mr-1" />
                                <span className=''>khuyễn mãi</span>
                            </NavLink>
                            <div className=" gap-x-64 mt-0 border-2 max-h-[300px] absolute w-[200px]  bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500 ">
                                <ul className="menu-item">
                                    <div className="menu-item-info text-sm leading-7 mb-4">
                                        <li><NavLink to=''>Thông tin trao thưởng</NavLink></li>
                                        <li><NavLink to=''>Tất cả khuyến mại</NavLink></li>
                                    </div>
                                </ul>
                            </div>
                        </li>
                        <li className="group">
                            <NavLink to='' className="nav-bar">
                                <i className="fas fa-piggy-bank mr-1" />
                                <span className=''>trả góp 0%</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <ToastContainer />

        </div>
    )
}

export default Header
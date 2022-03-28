import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const CateBox = (props: Props) => {
    return (
        <div className=" bg-white border-8 rounded-md mt-5 mx-auto w-[1200px] ">
            <div className="grid grid-cols-6 border-collapse rounded-md">
                <Link to=''>
                    <div className="catebox">
                        <figure className="w-24 h-24 bg-[#ccc] ml-11 rounded-full mb-2">
                            <img className="ml-4 pt-5" src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/dien-thoai.png" />
                        </figure>
                        <p>Điện thoại</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="catebox">
                        <figure className="w-24 h-24 bg-[#ccc] ml-11 rounded-full mb-2">
                            <img className="ml-4 pt-5" src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/laptop.png" />
                        </figure>
                        <p>Laptop</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="catebox">
                        <figure className="w-24 h-24 bg-[#ccc] ml-11 rounded-full mb-2">
                            <img className="ml-4 pt-5" src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/apple.png" />
                        </figure>
                        <p>Apple</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="catebox">
                        <figure className="w-24 h-24 bg-[#ccc] ml-11 rounded-full mb-2">
                            <img className="ml-4 pt-5" src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/Other/chuyentrangsamsung8_7.png" />
                        </figure>
                        <p>Samsung</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="catebox">
                        <figure className="w-24 h-24 bg-[#ccc] ml-11 rounded-full mb-2">
                            <img className="ml-4 pt-5" src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/Other/giadung.png" />
                        </figure>
                        <p>Hàng gia dụng</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="catebox">
                        <figure className="w-24 h-24 bg-[#ccc] ml-11 rounded-full mb-2">
                            <img className="ml-4 pt-5" src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/xiaomi2.png" />
                        </figure>
                        <p>Xiaomi</p>
                    </div>
                </Link>
            </div>
            <div className="grid grid-cols-6 border-collapse rounded-md">
                <Link to=''>
                    <div className="catebox">
                        <figure className="w-24 h-24 bg-[#ccc] ml-11 rounded-full mb-2">
                            <img className="ml-4 pt-5" src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/may_cu.png" />
                        </figure>
                        <p>Máy cũ</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="catebox">
                        <figure className="w-24 h-24 bg-[#ccc] ml-11 rounded-full mb-2">
                            <img className="ml-4 pt-5" src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/Other/tablet0409.png" />
                        </figure>
                        <p>Máy tính bảng</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="catebox">
                        <figure className="w-24 h-24 bg-[#ccc] ml-11 rounded-full mb-2">
                            <img className="ml-4 pt-5" src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/smart-watch.png" />
                        </figure>
                        <p>Đồng hồ thông minh</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="catebox">
                        <figure className="w-24 h-24 bg-[#ccc] ml-11 rounded-full mb-2">
                            <img className="ml-4 pt-5" src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/Other/donghothoitrang1308.png" />
                        </figure>
                        <p>Đồng hồ thời trang</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="catebox">
                        <figure className="w-24 h-24 bg-[#ccc] ml-11 rounded-full mb-2">
                            <img className="ml-4 pt-5" src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/PC1512.png" />
                        </figure>
                        <p>Máy tính để bàn</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="catebox">
                        <figure className="w-24 h-24 bg-[#ccc] ml-11 rounded-full mb-2">
                            <img className="ml-4 pt-5" src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/may-in.png" />
                        </figure>
                        <p>Máy in</p>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default CateBox
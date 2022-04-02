import React from 'react'
import { Link } from 'react-router-dom'
import SlideShow from './SlideShow'

type Props = {}

const Highlight = (props: Props) => {
    return (
        <div className=" bg-white border-8 rounded-md mx-auto w-[1200px] mt-6">
            <SlideShow />
            <ul className="flex justify-around text-center px-4 py-2">
                <li className="block text-gray-700 text-sm hover:text-black hover:font-medium"><Link to=''>iPhone 13 Pro Max lì xì đến 6 triệu</Link></li>
                <li className="block text-gray-700 text-sm hover:text-black hover:font-medium"><Link to=''>Sắm vivo lì xì đến 1,5 triệu</Link></li>
                <li className="block text-gray-700 text-sm hover:text-black hover:font-medium"><Link to=''>Hàng gia dụng lì xì đến 6 triệu</Link></li>
                <li className="block text-gray-700 text-sm hover:text-black hover:font-medium"><Link to=''>Laptop giảm ngay 10%+bảo hành đến 3 năm</Link></li>
                <li className="block text-gray-700 text-sm hover:text-black hover:font-medium"><Link to=''>Đặt trước Redmi Note 11 giảm 500.000đ</Link></li>
                <li className="block text-gray-700 text-sm hover:text-black hover:font-medium"><Link to=''>Sắm vivo lì xì đến 1,5 triệu</Link></li>
                <li className="block text-gray-700 text-sm hover:text-black hover:font-medium"><Link to=''>Sử dụng Xiaomi lì xì đến 6 triệu</Link></li>
            </ul>
        </div>
    )
}

export default Highlight
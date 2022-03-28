import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="bg-white min-w-full m-auto">
            <div className="w-[1200px] m-auto grid grid-cols-5 pt-10">
                <div id="intro">
                    <p><NavLink to=''>Giới thiệu về công ty</NavLink></p>
                    <p><NavLink to=''>Câu hỏi thường gặp khi mua hàng</NavLink></p>
                    <p><NavLink to=''>Chính sách bảo mật</NavLink></p>
                    <p><NavLink to=''>Quy chế hoạt động</NavLink></p>
                    <p><NavLink to=''>Kiểm tra hóa đơn điện tử</NavLink></p>
                    <p><NavLink to=''>Tra cứu thông tin bảo hành</NavLink></p>
                </div>
                <div id="intro">
                    <p><NavLink to=''>Tin tuyển dụng</NavLink></p>
                    <p><NavLink to=''>Tin khuyến mãi</NavLink></p>
                    <p><NavLink to=''>Hướng dẫn mua online</NavLink></p>
                    <p><NavLink to=''>Hướng dẫn mua trả góp</NavLink></p>
                    <p><NavLink to=''>Chính sách trả góp</NavLink></p>
                </div>
                <div id="intro">
                    <p><NavLink to=''>Hệ thống cửa hàng</NavLink></p>
                    <p><NavLink to=''>Hệ thống bảo hành</NavLink></p>
                    <p><NavLink to=''>Bán hàng doanh nghiệp</NavLink></p>
                    <p><NavLink to=''>Giới thiệu máy đổi trả</NavLink></p>
                    <p><NavLink to=''>Chính sách đổi trả</NavLink></p>
                </div>
                <div>
                    <div>
                        <p className="font-bold text-base text-[#535353]">Tư vấn mua hàng (Miễn phí)</p>
                        <p><span className="text-red-600 font-bold text-lg">1800 8763</span> (Nhánh 1)</p>
                    </div>
                    <div>
                        <p className="font-bold text-base text-[#535353]">Hỗ trợ kỹ thuật</p>
                        <p><span className="text-red-600 font-bold text-lg">1800 8763</span> (Nhánh 2)</p>
                    </div>
                    <div>
                        <p className="font-bold text-base text-[#535353]">Hỗ trợ thanh toán:</p>
                        <img className="w-[120px] ml-11" src="https://hcm.clickbuy.com.vn/assets/home/image_visa.svg" />
                    </div>
                </div>
                <div className="pl-5">
                    <p className="font-bold text-base text-[#535353]">Góp ý, khiếu nại dịch vụ <span>(8h20-22h00)</span></p>
                    <p className="text-red-600 font-bold text-lg">1800 9288</p>
                </div>
            </div>
            <div className="py-3 bg-[#e4e4e4] text-center text-xs text-[#333]">
                <p>© 2007 - 2021 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT / Địa chỉ: 261 - 263 Khánh Hội, P2, Q4, TP. Hồ
                    Chí Minh / GPĐKKD số 0311609355 do Sở KHĐT TP.HCM cấp ngày 08/03/2012. GP số 47/GP-TTĐT do sở TTTT
                    TP HCM cấp ngày 02/07/2018. Điện thoại: (028)73023456. Email: duongbkt@fpt.com.vn. Chịu trách nhiệm
                    nội dung: Bùi Khả Tùng Dương.</p>
            </div>
        </footer>
    )
}

export default Footer
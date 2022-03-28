import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className=" mx-auto w-[1200px] mt-5 ">
            <NavLink to=''>
                <img className="mx-auto" src="https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/images/2015/CTKM-Voucher/Sale%20het%20an%20tet/Sieu%20Sale%20Mung%20Nam%20Moi/banner-desk.png" />
            </NavLink>
        </div>
    )
}

export default Banner
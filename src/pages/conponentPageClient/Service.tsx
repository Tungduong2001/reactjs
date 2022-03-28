import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Service = (props: Props) => {
    return (
        <div className="mx-auto w-[1200px] bg-red-700 grid grid-cols-3 gap-3 overflow-hidden relative">
            <Link to='' className="service">
                <img className="my-5 rounded-md h-[125px]" src="https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/4/637584199039669299_icon-desktop-1.png" />
            </Link>
            <Link to='' className="service">
                <img className="my-5 rounded-md h-[125px]" src="https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/4/637584199040294624_icon-desktop.png" />
            </Link>
            <Link to='' className="service">
                <img className="my-5 rounded-md h-[125px]" src="https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/5/12/637248776517146629_f-friends.png" />
            </Link>
        </div>

    )
}

export default Service
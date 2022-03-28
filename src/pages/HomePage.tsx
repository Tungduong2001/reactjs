import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'

type HomePageProps = {
  products: ProductType[];
}

const HomePage = (props: HomePageProps) => {
  return (
    <div className=" bg-white border-8 rounded-md mt-5 mx-auto w-[1200px]">
      <p className=" text-[#cd1817] font-black text-lg uppercase ml-2 mt-4 mb-4">Sản phẩm</p>
      <div className="grid grid-cols-4 gap-5">
        {props.products.map((item, index) => {
          return <div className="group product" key={index}>
            <Link to="">
              <div className="product-image">
                <img src="https://res.cloudinary.com/asm-js-ecma/image/upload/v1645252799/bir5kxk3r5gihwyjjoc4.jpg" />
              </div>
              <p className="product-name">{item.name}</p>
              <div className="flex justify-center">
                <span className="product-price">{item.price}</span>
              </div>
            </Link>
            <div className="add-to-cart">
              <button className="cartPhone" ><p className=" text-white hover:text-teal-600"> Thêm vào giỏ hàng</p></button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default HomePage
import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'
import { currencyPrice } from '../utils/formatMoney';
import Banner from './conponentPageClient/Banner';
import CateBox from './conponentPageClient/CateBox';
import Hot from './conponentPageClient/Hot';
import Service from './conponentPageClient/Service';
import SlideShow from './conponentPageClient/SlideShow';

type HomePageProps = {
  products: ProductType[]
  onAddToCart: (cart: any) => void
}

const HomePage = (props: HomePageProps) => {
  return (
    <div className='bg-red-700'>
      <Banner />
      <SlideShow />
      <CateBox />
      <div className=" bg-white border-8 rounded-md mt-5 mx-auto w-[1200px] pb-5">
        <p className=" text-[#cd1817] font-black text-lg uppercase ml-2 mt-4 mb-4">Sản phẩm</p>
        <div className="grid grid-cols-4 gap-5">
          {props.products.map((item, index) => {
            return <div className="group product" key={index}>
              <Link to={`/product/${item._id}`}>
                <div className="product-image ">
                  <img src={item.image} className='py-3' />
                </div>
                <p className="product-name">{item.name}</p>
                <div className="flex justify-center">
                  <span className="product-price">{currencyPrice(item.price)}</span>
                </div>
              </Link>
              <div className="add-to-cart">
                <button className="cartPhone" onClick={() => props.onAddToCart(item._id)} ><p className=" text-white hover:text-teal-600"> Thêm vào giỏ hàng</p></button>
              </div>
            </div>
          })}
        </div>
      </div>
      <Hot />
      <Service />
    </div>
  )
}

export default HomePage
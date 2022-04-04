import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'
import { currencyPrice } from '../utils/formatMoney'
import Banner from './conponentPageClient/Banner'

type Props = {
    product: ProductType[]
}

const SearchPage = (props: Props) => {
    console.log(props.product);

    return (
        <div className='bg-red-700'>
            <Banner />
            <div className=" bg-white border-8 rounded-md mt-5 mx-auto w-[1200px]">
                <p className="font-black text-lg uppercase ml-2 mt-4 mb-4">Sản phẩm tìm kiếm cho từ khóa: </p>
                <div className="grid grid-cols-4 gap-5">
                    {props.product?.map((item, index) => {
                        return <div className="group product" key={index}>
                            <Link to={`/product/${item._id}`} >
                                <div className="product-image">
                                    <img src={item.image} />
                                </div>
                                <p className="product-name">{item.name}</p>
                                <div className="flex justify-center">
                                    <span className="product-price">{currencyPrice(item.price)}</span>
                                </div>
                            </Link>
                            <div className="add-to-cart">
                                <button className="cartPhone" ><p className=" text-white hover:text-teal-600"> Thêm vào giỏ hàng</p></button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchPage
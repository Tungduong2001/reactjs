import React from 'react'
import { currencyPrice } from '../utils/formatMoney';

type Props = {
    onIncreaseItemInCart: (id: number) => void
    onDecreaseItemInCart: (id: number) => void
    onRemoveCart: (id: number) => void
}

const CartPage = (props: Props) => {
    const cart = JSON.parse(localStorage.getItem('cart') as string);
    let total = 0
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white my-3">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    STT
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Avatar
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th className="px-6 py-3 text-right">
                                </th>
                                <th className="px-6 py-3 text-right">
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {cart && cart.map((item: any, index: number) => {
                                return <tr key={index}>
                                    <td className="px-6 py-3 max-w-[30px] w-[30px] text-center font-semibold">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-3 text-left">
                                        <img src={item.image} className="w-20" />
                                    </td>
                                    <td className="px-6 py-3 text-left">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-3 text-left">
                                        {currencyPrice(item.price)}
                                    </td>
                                    <td className="px-6 py-3 text-left">
                                        <button onClick={() => props.onIncreaseItemInCart(item._id)} className="btn increase border border-black p-2">+</button>
                                        <span className='px-2'>{item.quantity}</span>
                                        <button onClick={() => props.onDecreaseItemInCart(item._id)} className="btn decrease border border-black p-2">-</button>
                                    </td>
                                    <td className="px-6 py-3 text-right">
                                        <button onClick={() => props.onRemoveCart(item._id)} className="btn remove border font-normal text-[12px] uppercase hover:bg-gray-600 hover:text-white duration-300 border-gray-400 rounded px-5 py-1">Remove</button>
                                    </td>
                                    <td hidden>{total += item.price * item.quantity}</td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr><td colSpan={2} className="text-right">Tổng là: <span id="total">{currencyPrice(total)}</span></td></tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default CartPage
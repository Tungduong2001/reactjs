import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/product'
import { CategoryType } from '../types/category'
import { ProductType } from '../types/product'

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
    category: CategoryType[]
}
type FormInputs = {
    name: string,
    image: string,
    price: number,
    desc: string
    category: string
}

const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>()
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data)
        }
        getProduct();
    }, [])

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data)
        navigate("/admin/product")
    }
    return (
        <div>
            <div>
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Edit Products
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div className="px-4 py-6 sm:px-0">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
                                <form action='' onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Name</label>
                                        <input type="text" {...register('name', { required: true })} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                        {errors.name && <div className='text-red-700'>Không được để trống</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Avatar</label>
                                        <input type="text" {...register('image', { required: true })} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                        {errors.image && <div className='text-red-700'>Không được để trống</div>}
                                    </div>
                                    <select {...register('category')} className='w-full border border-black rounded-md h-10'>
                                        {props.category?.map((item, index) => <option key={index} value={item._id}>{item.name}</option>)}
                                    </select>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Price</label>
                                        <input type="text" {...register('price', { required: true })} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                        {errors.price && <div className='text-red-700'>Không được để trống</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Desc</label>
                                        <textarea {...register('desc', { required: true })} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                        {errors.desc && <div className='text-red-700'>Không được để trống</div>}
                                    </div>
                                    <div className="text-right pt-3">
                                        <button type="submit" className="mr-1 uppercase border text-[12px] min-w-[150px] border-gray-400 px-3 py-1 rounded hover:bg-gray-200 shadow-inner hover:shadow-gray-400 hover:shadow-sm hover:border-gray-500 duration-300 inline-block">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div >

        </div >
    )
}

export default ProductEdit
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
    name: string,
    image: string,
    price: number,
    category: string,
    desc: string
}

type ProductAddProps = {
    onAdd: (product: Inputs) => void
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        // console.log(dataInput);
        props.onAdd(dataInput)
        // navigate("/admin/product")
    }

    return (
        <div>
            <div>
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Add Products
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        {/* Replace with your content */}
                        <div className="px-4 py-6 sm:px-0">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
                                <form action='' onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Name</label>
                                        <input type="text" {...register('name')} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Avatar</label>
                                        <input type="file" className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Price</label>
                                        <input type="text" {...register('price')} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Category</label>
                                        <input type="text" {...register('category')} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Desc</label>
                                        <input type="text" {...register('desc')} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                    </div>
                                    <div className="text-right pt-3">
                                        <button type="submit" className="mr-1 uppercase border text-[12px] min-w-[150px] border-gray-400 px-3 py-1 rounded hover:bg-gray-200 shadow-inner hover:shadow-gray-400 hover:shadow-sm hover:border-gray-500 duration-300 inline-block">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* /End replace */}
                    </div>
                </main>
            </div>

        </div>
    )
}

export default ProductAdd
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { uploadImage } from '../api/product';
import { CategoryType } from '../types/category';

type Inputs = {
    name: string,
    image: any,
    price: number,
    category: string,
    desc: string
}

type ProductAddProps = {
    onAdd: (product: Inputs) => void
    category: CategoryType[];
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [imagePreview, setImagePreview] = React.useState<string>("")
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        const fomData = new FormData();
        fomData.append("image", dataInput.image[0]);
        uploadImage(fomData).then((response) => {
            dataInput.image = response.data.secure_url
            props.onAdd(dataInput)
            navigate("/admin/product")
        })
    }

    const imagePreviewHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileImage = e.target.files;
        if (fileImage) {
            const file = fileImage[0];
            const url = URL.createObjectURL(file);
            setImagePreview(url);
        }
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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <img src={imagePreview} alt="" className='w-[100px] h-[100px] border-1 border-gray-300' />
                                    {imagePreview && <button type="button" onClick={() => setImagePreview("")} className="mr-1 uppercase border text-[12px] min-w-[150px] border-gray-400 px-3 py-1 rounded hover:bg-gray-200 shadow-inner hover:shadow-gray-400 hover:shadow-sm hover:border-gray-500 duration-300 inline-block mt-3">Remove preview</button>}
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Name</label>
                                        <input type="text" {...register('name', { required: true })} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                        {errors.name && <div className='text-red-600'>Không được để trống</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Avatar</label>
                                        <input type="file" {...register('image', { required: true })} className="px-[10px] py-1 border rounded w-full focus:outline-0" onChange={imagePreviewHandle} />
                                        {errors.image && <div className='text-red-600'>Không được để trống</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Price</label>
                                        <input type="number" {...register('price', { required: true })} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                        {errors.price && <div className='text-red-600'>Không được để trống</div>}
                                    </div>
                                    <select {...register('category')} className='w-full border border-black rounded-md h-10'>
                                        {props.category?.map((item, index) => <option key={index} value={item._id}>{item.name}</option>)}
                                    </select>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Desc</label>
                                        <input type="text" {...register('desc', { required: true })} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                        {errors.desc && <div className='text-red-600'>Không được để trống</div>}
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
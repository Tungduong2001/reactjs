import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read, uploadImage } from '../api/product'
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
    const [imagePreview, setImagePreview] = React.useState<string>("")

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            setImagePreview(data.image)
            reset(data)
        }
        getProduct();
    }, [])

    const imagePreviewHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileImage = e.target.files;
        if (fileImage) {
            const file = fileImage[0];
            const url = URL.createObjectURL(file);
            setImagePreview(url);
        }
    }

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        let flag = false;
        let imageFile = ""
        if (typeof data.image === "string") {
            imageFile = imagePreview;
            flag = true
        } else {
            const fomData = new FormData();
            fomData.append("image", data.image[0]);
            const response = await uploadImage(fomData);
            imageFile = response.data.secure_url;
            flag = true
        }

        if (flag) {
            props.onUpdate({
                ...data,
                image: imageFile
            })
            navigate("/admin/product")
        }
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
                                        <img src={imagePreview} alt="" className='w-[100px] h-[100px] border-1 border-gray-300 mb-3' />
                                        <input type="file" {...register('image')} className="px-[10px] py-1 border rounded w-full focus:outline-0" onChange={imagePreviewHandle} />
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
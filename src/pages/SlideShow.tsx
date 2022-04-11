import axios from 'axios';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { uploadImage } from '../api/product';
import { SlideType } from '../types/slide';

type Inputs = {
    image: any,
    title: string
}
type SlideAddProps = {
    slide: SlideType[]
    onAdd: (slide: Inputs) => void
    onRemoveSlide: (id: number) => void
}

const SlideShow = (props: SlideAddProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
    const [imagePreview, setImagePreview] = React.useState<string>("")
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        const fomData = new FormData();
        fomData.append("image", dataInput.image[0]);
        uploadImage(fomData).then((response) => {
            dataInput.image = response.data.secure_url
            props.onAdd(dataInput)
            setImagePreview("")
            reset()
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
                            Slide
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        {/* Replace with your content */}
                        <div className="px-4 py-6 sm:px-0">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='w-[500px] h-[187.5px] mb-4  bg-gray-200'>
                                        <img src={imagePreview || "https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png"} alt="" className='object-contain w-full h-full' />
                                    </div>
                                    <button type="button" onClick={() => setImagePreview("")} className="mb-4 mr-1 uppercase border text-[12px] min-w-[150px] border-gray-400 px-3 py-1 rounded hover:bg-gray-200 shadow-inner hover:shadow-gray-400 hover:shadow-sm hover:border-gray-500 duration-300 inline-block mt-3">Remove preview</button>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Slide Image</label>
                                        <input type="file" {...register('image', { required: true })} className="px-[10px] py-1 border rounded w-full focus:outline-0" onChange={imagePreviewHandle} />
                                        {errors.image && <div className='text-red-600'>Không được để trống</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Title</label>
                                        <input type="text" {...register('title', { required: true })} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                        {errors.title && <div className='text-red-600'>Không được để trống</div>}
                                    </div>
                                    <div className="text-right pt-3">
                                        <button type="submit" className="mr-1 uppercase border text-[12px] min-w-[150px] border-gray-400 px-3 py-1 rounded hover:bg-gray-200 shadow-inner hover:shadow-gray-400 hover:shadow-sm hover:border-gray-500 duration-300 inline-block">Save</button>
                                    </div>
                                </form>

                                <div className='mt-16'>
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                                                    STT
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                                                    Image SlideShow
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                                    Title
                                                </th>
                                                <th className="px-6 py-3  text-xs font-medium  uppercase tracking-wider text-center">
                                                    Handle
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {props.slide?.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th className='"px-6 py-3 max-w-[30px] w-[30px] text-center font-semibold"' >{index + 1}</th>
                                                        <td className="px-6 py-3 text-left"><img src={item.image} alt="" width={200} height={70} /></td>
                                                        <td className="px-6 py-3 text-left">{item.title}</td>
                                                        <td className='px-6 py-3 text-right w-[300px]'>
                                                            <Link className="border font-normal text-[12px] uppercase hover:bg-gray-600 hover:text-white duration-300 border-gray-400 rounded px-5 py-1 mr-2" to={`/admin/slide/edit/${item._id}`}>Edit</Link>
                                                            <button className='btn-delete border font-normal text-[12px] uppercase hover:bg-gray-600 hover:text-white duration-300 border-gray-400 rounded px-5 py-1' onClick={() => props.onRemoveSlide(item._id!)}>Remove</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* /End replace */}
                    </div>
                </main>
            </div>

        </div>
    )
}

export default SlideShow
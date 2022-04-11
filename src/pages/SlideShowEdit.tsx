import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read, uploadImage } from '../api/product'
import { getOne } from '../api/slide'
import { SlideType } from '../types/slide'

type Inputs = {
    image: any,
    title: string
}
type SlideAddProps = {
    slide: SlideType[]
    onUpdateSlide: (slide: any) => void
}

const SlideShowEdit = (props: SlideAddProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
    const { id } = useParams();
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = React.useState<string>("")

    useEffect(() => {
        const getSlide = async () => {
            const { data } = await getOne(id);
            setImagePreview(data.image)
            reset(data)
        }
        getSlide();
    }, [])

    const imagePreviewHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileImage = e.target.files;
        if (fileImage) {
            const file = fileImage[0];
            const url = URL.createObjectURL(file);
            setImagePreview(url);
        }
    }

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
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
            props.onUpdateSlide({
                ...data,
                image: imageFile
            })
            navigate("/admin/slide")
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
                                        <label className="block mb-1 font-semibold">Image</label>
                                        <img src={imagePreview} alt="" className=' border-1 border-gray-300 mb-3' />
                                        <input type="file" {...register('image')} className="px-[10px] py-1 border rounded w-full focus:outline-0" onChange={imagePreviewHandle} />
                                        {errors.image && <div className='text-red-700'>Không được để trống</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="block mb-1 font-semibold">Tilte</label>
                                        <input type="text" {...register('title', { required: true })} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                        {errors.title && <div className='text-red-700'>Không được để trống</div>}
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

export default SlideShowEdit
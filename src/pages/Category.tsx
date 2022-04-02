import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CategoryType } from '../types/category'

type CategoryProps = {
    category: CategoryType[]
    onAddCategory: (category: CategoryType) => void
    onRemoveCategory: (id: number) => void
}
type FormInputs = {
    name: string
}
const Category = (props: CategoryProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        props.onAddCategory(data)
        navigate('/admin/category')
    }
    return (
        <div>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
                        <form action='' onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="block mb-1 font-semibold">Name</label>
                                <input type="text"  {...register('name', { required: true })} className="px-[10px] py-1 border rounded w-full focus:outline-0" />
                                {errors.name && <div id="emailHelp" className="form-text">Không được để trống!</div>}
                            </div>
                            <div className="text-right pt-3">
                                <button type="submit" className="mr-1 uppercase border text-[12px] min-w-[150px] border-gray-400 px-3 py-1 rounded hover:bg-gray-200 shadow-inner hover:shadow-gray-400 hover:shadow-sm hover:border-gray-500 duration-300 inline-block">Thêm</button>
                            </div>
                            <div className='mt-16'>
                                <table className="min-w-full divide-y divide-gray-200">
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {props.category?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th className='"px-6 py-3 max-w-[30px] w-[30px] text-center font-semibold"' >{index + 1}</th>
                                                    <td className="px-6 py-3 text-left">{item.name}</td>
                                                    <td className='px-6 py-3 text-right'>
                                                        <button onClick={() => props.onRemoveCategory(item._id)}>Remove</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>

                </div>
                {/* /End replace */}

            </div >


        </div >
    )
}

export default Category
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type Props = {
    onSearch: (key: string) => void
}
type FormInputs = {
    name: string
}
const FormSearch = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onSearch(data.name)
        navigate(`/search?q=${data.name}`)
    }
    return (
        <div>
            <form action="" className="w-[700px] mt-5 pl-10 flex " onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name')} className="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" />
                <button className="h-10"><i className="fas fa-search bg-[#333333] text-white py-3 px-4 rounded-sm" /></button>
            </form>
        </div>
    )
}

export default FormSearch
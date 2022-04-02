import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signup } from '../api/user'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
    name: string,
    email: string,
    password: string,
}


const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        signup(dataInput)
            .then(res => {
                toast.success("Đăng kí thành công")
                setTimeout(function () {
                    navigate("/login")
                }, 2000)
            })
            .catch(res => toast.error("Tài khoản đã tồn tại"))
    }
    return (
        <div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign up
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">Email address</label>
                                <input id="username" {...register('name', { required: true })} type="text" autoComplete="username" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                                {errors.name && <div className='text-red-600'>Không được để trống</div>}
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email" {...register('email', { required: true })} autoComplete="email" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                                {errors.name && <div className='text-red-600'>Không được để trống</div>}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input id="password" {...register('password', { required: true })} type="password" autoComplete="current-password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                                {errors.name && <div className='text-red-600'>Không được để trống</div>}
                            </div>
                        </div>
                        <div>
                            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    {/* Heroicon name: solid/lock-closed */}
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Sign Up
                            </button>
                        </div>
                        <div className="text-center">
                            <p>Do you already have an account?<a href="/login" className="text-blue-600"> Sign in</a></p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />

        </div>
    )
}

export default Signup
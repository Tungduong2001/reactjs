import React from 'react'
import { Link } from 'react-router-dom'
import { UserType } from '../types/user'

type Props = {
    users: UserType[],
    onRemove: (id: number) => void
}

const UserManage = (props: Props) => {
    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        ListUsers
                    </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {props.users && props.users.map((item, index) => {
                                        return <tr key={index}>
                                            <td className="px-6 py-3 max-w-[30px] w-[30px] text-center font-semibold">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-3 text-left">
                                                {item.name}

                                            </td>
                                            <td className="px-6 py-3 text-left">
                                                {item.email}
                                            </td>
                                            <td className="px-6 py-3 text-left">
                                                {item.role == 1 ? "Quản trị" : "Khách hàng"}
                                            </td>
                                            <td className="px-6 py-3 text-right">
                                                <button className="btn-delete border font-normal text-[12px] uppercase hover:bg-gray-600 hover:text-white duration-300 border-gray-400 rounded px-5 py-1" onClick={() => props.onRemove(item._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default UserManage
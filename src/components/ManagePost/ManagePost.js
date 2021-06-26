import React, { useEffect, useState } from 'react';
import './ManagePost.css';



const ManagePost = () => {

    const [posts, setPosts] = useState([])
    // const [status, setStatus] = useState('unapproved')

    const postData = () => {
        fetch('https://mighty-mountain-29830.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }

    useEffect(() => {
        postData()
    }, [])


    const handleStatusChange = (id, updateStatus) => {

        fetch(`https://mighty-mountain-29830.herokuapp.com/updateStatus/${id}`, {

            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: updateStatus })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    postData()
                }
            })
    }

    return (
        <div>
            <div className="flex flex-col w-full">
                <div className="-my-2 overflow-x-auto">
                    <div className="py-2 w-full align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Blog Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                                        >
                                            Author
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                                        >
                                            Make Approve
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                                        >
                                            Make Unapprove
                                        </th>

                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {posts.map((post) => (
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="">
                                                        <div className="text-sm text-gray-500">{post.title}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="pl-4 py-4 whitespace-nowrap text-center">
                                                <div className="text-sm w-full text-center">
                                                    <img className="h-10 w-10 m-auto object-cover rounded-full" src={post.userData.photoURL} alt="" />
                                                </div>
                                                <div className="text-sm text-gray-500">{post.authorName}</div>
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${post.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                    {post.status}
                                                </span>
                                            </td>
                                            <td className="pl-5 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">
                                                    <button onClick={() => {
                                                        // setStatus('approved')
                                                        handleStatusChange(post._id, 'approved')
                                                    }} className="p-3 bg-green-100 text-green-800 font-bold rounded-full hover:bg-green-300">Approve</button>
                                                </div>
                                            </td>
                                            <td onClick={() => {
                                                // setStatus('unapproved')
                                                handleStatusChange(post._id, 'unapproved')
                                            }} className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">
                                                    <button className="p-3 bg-red-100 text-red-800 font-bold rounded-full hover:bg-red-300">Unapproved</button>
                                                </div>
                                            </td>
                                            <td className="pr-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button className="text-red-700 bg-red-100 p-2 rounded-full hover:bg-red-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePost;
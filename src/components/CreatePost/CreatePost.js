import React, { useContext, useState } from 'react';
import './CreatePost.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { UserContext } from '../../App';
import uploadLoader from '../../images/upload-loading.gif';
import Navbar from '../Navbar/Navbar';
import toast, { Toaster } from 'react-hot-toast';

const CreatePost = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [submitActive, setSubmitActive] = useState(false)
    const [showUploadLoader, setShowUploadLoader] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [imgName, setImgName] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.imageUrl = imageUrl;
        data.status = 'unapproved';
        data.date = new Date().toDateString();
        data.userData = loggedInUser;


        fetch('http://localhost:5000/addPost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Your Post Successfully Done')
                    // setImageUrl('')
                    // setImgName('')
                    // setSubmitActive(false)
                }
            })




    };


    const handleImageUpload = (e) => {
        setShowUploadLoader(true);
        setImgName(e.target.files[0].name);
        const imageData = new FormData();
        imageData.set('key', '3cae36f009a8d103d0605341f3845f2b')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageUrl(response.data.data.display_url)
                setShowUploadLoader(false);
                setSubmitActive(true)
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    return (
        <section className="">
            <Navbar />
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <div className="flex h-screen items-center justify-center  mt-32 mb-32">
                <div className="grid bg-white rounded-lg shadow-2xl w-11/12 md:w-9/12 lg:w-1/2">

                    <div className="flex justify-center">
                        <div className="flex">
                            <h1 className="text-gray-600 font-bold md:text-2xl text-xl pt-5">Write your Creativity/Experience/Style</h1>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Blog Title</label>
                            <input {...register("title", { required: true })} className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text" placeholder="Write a Title Blog" />
                            {errors.title && <span>This field is required</span>}
                        </div>

                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Author Name</label>
                            <input {...register("authorName", { required: true })} className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text" placeholder="Write Your Name" />
                            {errors.authorName && <span>This field is required</span>}
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                            <div className="grid grid-cols-1">
                                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Time to Create</label>
                                <input className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text" defaultValue={new Date().toDateString()} disabled />
                            </div>
                            <div className="grid grid-cols-1">
                                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Category</label>
                                <select {...register("category", { required: true })} className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                                    <option>TRAVEL</option>
                                    <option>FASHION</option>
                                    <option>LIFE STYLE</option>
                                </select>
                                {errors.category && <span>This field is required</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
                            <div className='flex items-center justify-center w-full'>
                                <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-blue-300 group'>
                                    <div className='flex flex-col items-center justify-center pt-7'>
                                        {
                                            showUploadLoader ? <img src={uploadLoader} className="w-12" alt="" /> :

                                                <svg className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        }
                                        <p className='lowercase text-sm text-gray-400 group-hover:text-blue-600 pt-1 tracking-wider'>{imgName ? `Your Selected Image is ${imgName}` : 'Select a photo'}</p>
                                    </div>
                                    <input onChange={handleImageUpload} type='file' className="hidden" />
                                </label>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Blog Description</label>
                            <textarea {...register("description", { required: true })} rows="5" className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
                            {errors.description && <span>This field is required</span>}

                        </div>

                        <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                            <button type="submit" className={`w-auto ${submitActive ? 'bg-blue-500 hover:bg-blue-700' : 'bg-blue-300 disabled:opacity-50 cursor-not-allowed'} rounded-lg shadow-xl font-medium text-white px-4 py-2`} disabled={!submitActive} >Post Your Blog</button>
                        </div>

                    </form>
                </div>
            </div>






        </section>
    );
};

export default CreatePost;
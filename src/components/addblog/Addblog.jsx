import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';



export const Addblog = () => {
    const [blog, setBlog] = useState({
        catename: '',
        blogtitle: '',
        blogauthor: '',
        blogdescription: '',
        images: ''
    })

    const [cate, setCate] = useState([])

    const handler = (e) => {
        const { name, value } = e.target
        setBlog({ ...blog, [name]: value })
    }

    const saveBlog = async (e) => {
        try {
            e.preventDefault()
            // console.log(blog);
            const formData = new FormData();
            formData.append('catename', blog.catename);
            formData.append('blogtitle', blog.blogtitle);
            formData.append('blogauthor', blog.blogauthor);
            formData.append('blogdescription', blog.blogdescription);
            if (blog.images) formData.append('images', blog.images); // field = images
            const res = await axios.post("https://backend-blog-3-bwsd.onrender.comapi/add-blog", formData)
            // console.log(res);
            if (res.data.success === true || res.status === 201) {
                toast.success(res.data.msg)
            }




        } catch (err) {
            console.log(err);

        }
    }

    const getAllCategoery = async () => {
        try {
            const catRes = await axios.get("https://backend-blog-3-bwsd.onrender.comapi/categories")
            console.log(catRes);
            setCate(catRes.data.categories)

        }
        catch (err) {
            console.log(err);

        }
    }

    const updateData = (e) => {
        // console.log(e.target.files);
        setBlog({ ...blog, images: e.target.files[0] })
    }

    useEffect(() => {
        getAllCategoery()
    }, [])
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <br />
                            <h3 className="mb-0" style={{ textAlign: "center" }}>Add New Blog</h3>
                            <br />
                            <Toaster />
                        </div>
                        <div className="card-body">
                            <form onSubmit={saveBlog} encType="multipart/form-data">
                                {/* Category Name */}
                                <div className="mb-3">
                                    <label className="form-label">Category Name</label>

                                    <select
                                        className="form-select"
                                        name="catename"
                                        required
                                        name='catename'
                                        onChange={handler}
                                    >
                                        <option value="">-- Select Category --</option>
                                        {
                                            cate.map((c, i) =>
                                                <option value={c} key={i}>{c}</option>
                                            )
                                        }




                                    </select>
                                </div>
                                {/* Blog Title */}
                                <div className="mb-3">
                                    <label className="form-label">Blog Title</label>
                                    <input
                                        type="text"
                                        className="form-control"

                                        placeholder="Enter Blog Title"
                                        required=""
                                        name='blogtitle'
                                        onChange={handler}
                                    />
                                </div>
                                {/* Blog Author */}
                                <div className="mb-3">
                                    <label className="form-label">Blog Author</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="blogauthor"
                                        placeholder="Enter Author Name"
                                        required=""

                                        onChange={handler}
                                    />
                                </div>
                                {/* Blog Description */}
                                <div className="mb-3">
                                    <label className="form-label">Blog Description</label>
                                    <textarea
                                        className="form-control"

                                        rows={6}
                                        placeholder="Write your blog description..."
                                        required=""
                                        defaultValue={""}
                                        name='blogdescription'
                                        onChange={handler}
                                    />
                                </div>
                                {/* Blog Image */}
                                <div className="mb-4">
                                    <label className="form-label">Upload Image</label>
                                    <input
                                        type="file"
                                        className="form-control"


                                        required=""
                                        name='images'
                                        onChange={updateData}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Add Blog
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

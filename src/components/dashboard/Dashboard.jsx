import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './dashboard.css'
const BASE_URL = import.meta.env.VITE_BASE_URL;


export const Dashboard = () => {
    const [cate, setCate] = useState([])
    const [blog, setBlog] = useState([])

    const getAllCateoryData = async () => {
        try {
            const catRes = await axios.get("https://backend-blog-3-bwsd.onrender.comapi/categories")
            setCate(catRes.data.categories)

        } catch (err) {
            console.log(err);

        }
    }

    const getCategoeryByName = async (c_name) => {
        // alert(c_name)
        try {
            const cRes = await axios.get("https://backend-blog-3-bwsd.onrender.comapi/blog-cate/" + c_name);
            setBlog(cRes.data.caterecords)

        } catch (err) {
            console.log(err);

        }

    }

    const getAllBlogs = async () => {
        try {
            const blogRes = await axios("https://backend-blog-3-bwsd.onrender.comapi/add-blog")
            console.log(blogRes);
            setBlog(blogRes.data.records)

        } catch (err) {

            console.log(err);

        }

    }

    useEffect(() => {
        getAllCateoryData()
        getAllBlogs()
    }, [])
    return (
        <div className="container-fluid" style={{ marginTop: "2%" }}>
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item active" aria-current="true">
                            Categoery
                        </li>
                        {
                            cate.map((item, index) =>
                                <li class="list-group-item"><a href="#" onClick={() => { getCategoeryByName(item) }} style={{ textDecoration: "none" }}>{item}</a></li>

                            )
                        }

                    </ul>

                </div>
                <div className="col-md-9">
                    <div className="container-fluid">
                        <div className="row">
                            {
                                blog.map((data, index) =>
                                    <div className="col-md-4">
                                        <div className="card blog-card">
                                            <div className="position-relative">
                                                <img
                                                    src={`${BASE_URL}/uploads/${data.images}`}
                                                    className="card-img-top"
                                                    alt="Blog Image"
                                                />
                                                <span className="category">{data.catename}</span>
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">{data.blogtitle}</h4>
                                                <p className="card-text">
                                                    {data.blogdescription.slice(0, 100) + ' .....'}
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center mb-3 author">
                                                    <span>
                                                        <i className="bi bi-person-circle" />
                                                        {data.blogauthor}
                                                    </span>
                                                    <span>
                                                        <i className="bi bi-calendar3" />
                                                        {data.createdAt}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="d-grid">
                                                    <a href="#" className="btn btn-primary btn-read">
                                                        Read More
                                                        <i className="bi bi-arrow-right ms-2" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

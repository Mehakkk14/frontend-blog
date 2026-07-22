import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL;
import toast, { Toaster } from 'react-hot-toast';


export const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handler = (e) => {
        const { name, value } = e.target
        setLogin({ ...login, [name]: value })

    }

    const loginForm = async (event) => {
        try {
            event.preventDefault()
            //api
            // console.log(login);
            const res = await axios.post(`${BASE_URL}/api/login`, login)
            console.log(res);
            if (res.data.success === true || res.status === 201) {
                localStorage.setItem("authToken", res.data.token)
                navigate("/")
            }


        }
        catch (err) {
            console.log(err);

        }
    }
    return (
        <div className="card signup-card" style={{ margin: "auto", marginTop: "2%" }}>
            <div className="card-body">
                <div className="text-center mb-4" >
                    <h2>Login Account</h2>
                    <p className="text-muted">Loign up to continue</p>
                </div>
                <form onSubmit={loginForm}>

                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-envelope-fill" />
                            </span>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                name='email'
                                onChange={handler}
                            />
                        </div>
                    </div>


                    {/* Password */}
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-lock-fill" />
                            </span>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                name='password'
                                onChange={handler}
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <button className="btn btn-primary w-100 btn-signup">
                        <i className="bi bi-person-plus-fill" /> Login Account
                    </button>
                </form>
                <div className="text-center mt-4">
                    Already have an account?
                    <Link to="/sign-up" className="fw-bold">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}

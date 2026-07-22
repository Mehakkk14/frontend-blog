import React, { useState } from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL;
import toast, { Toaster } from 'react-hot-toast';


export const Signup = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        mobile: '',
        password: ''
    })

    const handler = (event) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })

    }

    const saveForm = async (event) => {
        try {
            event.preventDefault()
            // console.log(state);
            const res = await axios.post(`${BASE_URL}/api/sign-up`, state)
            console.log(res);
            if (res.data.message === true || res.status === 201) {
                toast.success(res.data.message)
            }




        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                toast.error(err.response.data.message);   // Server‑side message
            } else {
                toast.error("Something went wrong");      // Fallback
            }
            console.error(err);

        }
    }
    return (
        <div className="card signup-card" style={{ margin: "auto", marginTop: "2%" }}>
            <div className="card-body">
                <div className="text-center mb-4" >
                    <h2>Create Account</h2>
                    <p className="text-muted">Sign up to continue</p>
                </div>
                <form onSubmit={saveForm}>
                    {/* Name */}
                    <Toaster />
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-person-fill" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                name='name'
                                onChange={handler}
                            />
                        </div>
                    </div>
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
                    {/* Mobile */}
                    <div className="mb-3">
                        <label className="form-label">Mobile Number</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-telephone-fill" />
                            </span>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter mobile number"
                                maxLength={10}
                                name='mobile'
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
                        <i className="bi bi-person-plus-fill" /> Create Account
                    </button>
                </form>
                <div className="text-center mt-4">
                    Already have an account?
                    <Link to="/login" className="fw-bold">
                        Login
                    </Link>
                </div>
            </div>
        </div>

    )
}

import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export const Header = () => {
    const [status, setStatus] = useState(false)
    const navi = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            setStatus(true)
        }

    })

    const logout = () => {
        localStorage.removeItem('authToken')
        navi('/login')
        setStatus(false)

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow sticky-top">
            <div className="container">

                {/* Logo */}
                <Link className="navbar-brand fw-bold text-primary fs-3" to="/">
                    Blog Post
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    {/* Menu */}
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">
                                About Us
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/add-blog">
                                Add Blog
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    {/* Right Side Buttons */}

                    {
                        status ? (
                            <div className="d-flex gap-2">
                                <a href="#" onClick={logout} className="btn btn-danger rounded-pill px-4">
                                    Logout
                                </a>


                            </div>
                        ) : (
                            <div className="d-flex gap-2">
                                <Link to="/login" className="btn btn-outline-light rounded-pill px-4">
                                    Login
                                </Link>

                                <Link to="/sign-up" className="btn btn-primary rounded-pill px-4">
                                    Sign Up
                                </Link>
                            </div>
                        )
                    }

                </div>
            </div>
        </nav>


    )
}

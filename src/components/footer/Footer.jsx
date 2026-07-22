import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="footer-section pt-5 pb-3 mt-5">
            <div className="container">
                <div className="row gy-4">
                    {/* Logo */}
                    <div className="col-lg-4 col-md-6">
                        <h2 className="fw-bold text-white">
                            <i className="bi bi-journal-bookmark-fill text-warning" />
                            BlogSphere
                        </h2>
                        <p className="text-light mt-3">
                            Discover inspiring stories, programming tutorials, technology updates,
                            travel experiences, and lifestyle articles from expert writers around
                            the world.
                        </p>
                        <div className="social-icons mt-4">
                            <Link to="#">
                                <i className="bi bi-facebook" />
                            </Link>
                            <Link to="#">
                                <i className="bi bi-instagram" />
                            </Link>
                            <Link to="#">
                                <i className="bi bi-twitter-x" />
                            </Link>
                            <Link to="#">
                                <i className="bi bi-linkedin" />
                            </Link>
                            <Link to="#">
                                <i className="bi bi-youtube" />
                            </Link>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="footer-title">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="about-us">About</Link>
                            </li>
                            <li>
                                <Link to="#">Blogs</Link>
                            </li>
                            <li>
                                <Link to="#">Categories</Link>
                            </li>
                            <li>
                                <Link to="contact-us">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Categories */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="footer-title">Categories</h5>
                        <ul className="list-unstyled footer-links">
                            <li>
                                <Link to="#">Technology</Link>
                            </li>
                            <li>
                                <Link to="#">Programming</Link>
                            </li>
                            <li>
                                <Link to="#">Travel</Link>
                            </li>
                            <li>
                                <Link to="#">Business</Link>
                            </li>
                            <li>
                                <Link to="#">Lifestyle</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="footer-title">Subscribe Newsletter</h5>
                        <p className="text-light">
                            Get the latest blog posts directly in your inbox.
                        </p>
                        <form>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                                <button className="btn btn-warning fw-bold">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr className="border-secondary mt-5" />
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0 text-light">
                            © 2026 BlogSphere. All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
                        <Link to="#" className="text-decoration-none text-light me-3">
                            Privacy Policy
                        </Link>
                        <Link to="#" className="text-decoration-none text-light me-3">
                            Terms
                        </Link>
                        <Link to="#" className="text-decoration-none text-light">
                            Support
                        </Link>
                    </div>
                </div>
            </div>
        </footer>

    )
}

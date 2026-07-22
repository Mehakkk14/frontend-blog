import React, { useState } from 'react'
import "./contact.css"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {

    const [data, setData] = useState({
        f_name: '',
        l_name: '',
        email_id: '',
        mobile_number: '',
        message: ''
    })

    const handler = (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.value);
        const { name, value } = e.target; // destructing
        setData({ ...data, [name]: value })



    }

    const saveForm = (e) => {
        e.preventDefault()
        console.log(data); // api 
        axios.post("https://backend-blog-3-bwsd.onrender.comcontact", data)
            .then((res) => {
                // console.log(res);
                if (res.status === 201) {
                    toast.success("Request Send Successfully !")
                }

            })


    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.511767716616!2d81.05652807531335!3d26.88724876118471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be20980ffbb15%3A0x33192d2892e02600!2sBBD%20University%20H-Block!5e0!3m2!1sen!2sin!4v1783678717484!5m2!1sen!2sin" style={{ width: "100%", height: "350px" }} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>
            <div className="row" style={{ marginTop: "5%" }}>
                <div className="col-md-4">
                    <img src="gallery/contact.jpg" alt="" className='my_img' />
                </div>
                <div className="col-md-8">
                    <div className="my_title">
                        get in touch
                    </div>
                    <Toaster />
                    <form action="" onSubmit={saveForm}>
                        <div className="row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    name='f_name'
                                    onChange={handler}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                    name='l_name'
                                    onChange={handler}
                                />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "2%" }}>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email Id"
                                    name='email_id'
                                    onChange={handler}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Mobile Number"
                                    name='mobile_number'
                                    onChange={handler}
                                />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "2%" }}>
                            <div className="col">
                                <textarea name='message'
                                    onChange={handler} style={{ height: "100px" }} className='form-control' placeholder='Message' id=""></textarea>
                            </div>

                        </div>
                        <div className="row" style={{ marginTop: "2%" }}>
                            <div className="col">
                                <input type="submit" value="Send Message" className='btn btn-success' />
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

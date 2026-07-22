import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'



export const Contactlist = () => {

    const [record, setRecord] = useState([])

    // const [color, setColor] = useState("red")
    // const [course, setCourse] = useState("python")

    const getContactList = () => {
        axios.get("http://localhost:3004/contact")
            .then((res) => {
                // console.log(res);
                // console.log(res.data);
                setRecord(res.data)


            })
    }

    useEffect(() => {
        // console.log('use Effcet will execute');
        getContactList()

    }, [])

    // const chnageColor = () => {
    //     setColor("Blue")
    // }

    // const chnageCourse = () => {
    //     setCourse("JavasCript")
    // }

    const deleteData = (id) => {
        // alert(id)


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("http://localhost:3004/contact/" + id)
                    .then((res) => {
                        // console.log(res);
                        if (res.status == 200) {
                            getContactList()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })
            }
        });

    }



    return (
        <>
            {console.log("re-render")
            }
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <br />
                        <div>
                            <Link to="/contact-us" className='btn btn-success'>Add Contact</Link>
                        </div>
                        <br />
                        {/* <br />
                        <input type="submit" value="Get Contact List" className='btn btn-primary' onClick={getContactList} />
                        <br />
                        <br /> */}
                        {/* <div>{color}</div>
                        <br />
                        <input type="submit" value="Chnage Color " onClick={chnageColor} />
                        <br />
                        {course}
                        <br />
                        <input type="submit" value="Chnage Course Name" onClick={chnageCourse} /> */}
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Id</th>
                                    <th>Mobile Number</th>
                                    <th>Message</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    record.map((item, index) =>
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.f_name}</td>
                                            <td>{item.l_name}</td>
                                            <td>{item.email_id}</td>
                                            <td>{item.mobile_number}</td>
                                            <td>{item.message}</td>
                                            <td>
                                                <Link className='btn btn-success' to={`/edit/${item.id}`}>Edit</Link>
                                                &nbsp;
                                                <a href="#" className='btn btn-danger' onClick={() => { deleteData(item.id) }}>Delete</a>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </>
    )
}


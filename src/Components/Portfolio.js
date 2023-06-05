import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useFormik } from 'formik'

function Portfolio() {
    const [pgloading, setpgloading] = useState(true)
    const ids = localStorage.getItem('ID')
    const [isloading, setloading] = useState(false)
    const [port, setport] = useState([])

    useEffect(() => {
        getport()


    }, [])



    let getport = async () => {
        const portt = await axios.get(`https://studentdashboard-1qg6.onrender.com/portfolio/${ids}`, {
            headers: {
                Authorization: `${window.localStorage.getItem("token")}`
            }

        })
        setport(portt.data)
        setpgloading(false)
    }

    const formik = useFormik({
        initialValues: {
            source: "",
            deployed: "",
        },
        validate: (values) => {
            let errors = {}
            if (!values.github) {
                errors.github = "Github URL is required"
            }
            if (!values.porturl) {
                errors.porturl = "Portfolio URL is required"
            }
            if (!values.resume) {
                errors.resume = "Resume URL is required"
            }
            return errors;
        },
        onSubmit: async (values) => {
            setpgloading(true)
            alert("Portfolio submitted")
            setloading(true)

            const port = await axios.post(`https://studentdashboard-1qg6.onrender.com/portfolio/${ids}`, values, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }

            })

            formik.resetForm();

            getport()
        }
    })
    return (
        <>

            <div className='container'>
                <div className='row'>
                    {pgloading ? (<div class="col d-flex justify-content-center" >
                        <h1 style={{ color: "tomato", maxwidth: "10rem", fontSize: "40px", fontFamily: "cursive" }}>Loading</h1>
                    </div>) : (<>
                        <div className='col-lg-4'>

                            <form onSubmit={formik.handleSubmit}>
                                <div className='col-lg-12'>
                                    <label >GitHub URL</label>
                                    <input type='text'
                                        name='github'
                                        value={formik.values.github}
                                        onChange={formik.handleChange}
                                        className={`form-control ${formik.errors.github ? "is-invalid" : "is-valid"}`} />
                                    <span style={{ color: "red" }}>{formik.errors.github}</span>
                                </div>
                                <br />
                                <div className='col-lg-12'>

                                    <label >Portfolio URL</label>
                                    <input type='text'
                                        name='porturl'
                                        value={formik.values.porturl}
                                        onChange={formik.handleChange}
                                        className={`form-control ${formik.errors.porturl ? "is-invalid" : "is-valid"}`} />
                                    <span style={{ color: "red" }}>{formik.errors.porturl}</span>
                                </div>

                                <div className='col-lg-12'>

                                    <label >Resume URL</label>
                                    <input type='text'
                                        name='resume'
                                        value={formik.values.resume}
                                        onChange={formik.handleChange}
                                        className={`form-control ${formik.errors.resume ? "is-invalid" : "is-valid"}`} />
                                    <span style={{ color: "red" }}>{formik.errors.resume}</span>
                                </div>

                                <div className='col-lg-3 mt-4 '>
                                    <input type={"submit"} disabled={isloading} value={"Submit"}
                                        className='btn btn-primary' />


                                </div>
                            </form>
                        </div>

                        <div className='col-lg-8'>
                            {port.length == 0 ?
                                (<h2 class="card-title text-center " style={{ fontSize: "18px", fontFamily: "cursive" }}>Portfolio not yet submitted</h2>)
                                :
                                port.map((ports) => {

                                    return <div class="card ">
                                        <div class="card-body ">
                                            <h3 class="card-title text-center " style={{ fontSize: "18px", fontFamily: "cursive" }}>Portfolio Review</h3>
                                            <hr className="sidebar-divider my-2 " />
                                            <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }} class="card-text"> GitHub URL: <span style={{ color: "black", fontSize: "18px", fontFamily: "cursive" }}>{ports.github}</span></h3>
                                            <br />
                                            <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Portfolio URL:<span style={{ color: "black", fontSize: "18px", fontFamily: "cursive" }}>{ports.porturl}</span></h3>
                                            <br />
                                            <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Status:<span style={{ color: "black", fontSize: "18px", fontFamily: "cursive" }}>Submitted</span></h3>

                                            <h5 class="card-text text-right" style={{ color: "royalblue", fontSize: "18px", fontFamily: "cursive" }}>Not yet reviewed</h5>
                                        </div>
                                    </div>



                                })}
                        </div>
                    </>)}

                </div>
                {/* {/* </div> */}
            </div >


        </>
    )
}

export default Portfolio
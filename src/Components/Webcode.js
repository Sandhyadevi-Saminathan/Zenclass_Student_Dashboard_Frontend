import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'

function Webcode() {
    const ids = localStorage.getItem('ID')
    const [pgloading, setpgloading] = useState(true)
    const [isloading, setloading] = useState(false)
    const [submit, setsubmit] = useState(0);
    const [task, settask] = useState([])
    const [web, setweb] = useState([])

    useEffect(() => {

        gettask()
        getweb()
    }, [])

    let getweb = async () => {
        const webdet = await axios.get(`https://studentdashboard-1qg6.onrender.com/webcodedet/${ids}`, {
            headers: {
                Authorization: `${window.localStorage.getItem("token")}`
            }

        })
        setweb(webdet.data)
        setpgloading(false)



    }


    let gettask = async () => {
        const webcode = await axios.get("https://studentdashboard-1qg6.onrender.com/webcode", {
            headers: {
                Authorization: `${window.localStorage.getItem("token")}`
            }

        })
        settask(webcode.data)
        setpgloading(false)
    }

    const formik = useFormik({
        initialValues: {
            source: "",
            deployed: "",
        },
        validate: (values) => {
            let errors = {}
            if (!values.source) {
                errors.source = "Front End Source Code is required"
            }
            if (!values.deployed) {
                errors.deployed = "Front End deployed URL is required"
            }
            return errors;
        },
        onSubmit: async (values) => {

            setpgloading(true)
            alert("Webcode submitted")
            setloading(!isloading)

            const webcd = await axios.post(`https://studentdashboard-1qg6.onrender.com/webcodedet/${ids}`, values, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }

            })

            formik.resetForm();

            getweb()
        }
    })
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {pgloading ? (<div class="col d-flex justify-content-center" >
                        <h1 style={{ color: "tomato", maxwidth: "10rem", fontSize: "40px", fontFamily: "cursive" }}>Loading</h1>
                    </div>) : (<>
                        <div className='col-lg-6'>
                            {task.length == 0 ?
                                (<h2>Webcode not yet assigned</h2>)
                                :
                                task.map((tasks) => {

                                    return <div class="card ">
                                        <div class="card-body ">
                                            <h3 class="card-title text-center " style={{ fontSize: "18px", fontFamily: "cursive" }}>First Webcode</h3>
                                            <h3>Topic:</h3>
                                            <p class="card-text" style={{ color: "tomato", fontSize: "24px", fontFamily: "cursive" }}>{tasks.topic}</p>
                                            <h3>Description:</h3>
                                            <p class="card-text" style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>{tasks.description}</p>
                                            <h4 >Contents:</h4>
                                            <p class="card-text" style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>{tasks.constraints.c1}</p>

                                            <p class="card-text" style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}> {tasks.constraints.c2}</p>
                                            <p class="card-text" style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}> {tasks.constraints.c3}</p>

                                        </div>
                                        <form onSubmit={formik.handleSubmit}>
                                            <div className='col-lg-12'>
                                                <label >Front-End Source code</label>
                                                <input type='text'
                                                    name='source'
                                                    value={formik.values.source}
                                                    onChange={formik.handleChange}
                                                    className={`form-control ${formik.errors.source ? "is-invalid" : "is-valid"}`} />
                                                <span style={{ color: "red" }}>{formik.errors.source}</span>
                                            </div>
                                            <br />
                                            <div className='col-lg-12'>

                                                <label >Front-End Deployed URL</label>
                                                <input type='text'
                                                    name='deployed'
                                                    value={formik.values.deployed}
                                                    onChange={formik.handleChange}
                                                    className={`form-control ${formik.errors.deployed ? "is-invalid" : "is-valid"}`} />
                                                <span style={{ color: "red" }}>{formik.errors.deployed}</span>
                                            </div>
                                            <div className='col-lg-3 mt-4 '>
                                                <input type={"submit"} disabled={isloading} value={"Submit"}
                                                    className='btn btn-primary' />


                                            </div>
                                        </form>
                                    </div>



                                })}

                        </div>
                        <div className='col-lg-6'>
                            {web.length == 0 ?
                                (<h2 style={{ fontSize: "18px", fontFamily: "cursive" }}>Webcode not yet submitted</h2>)
                                :
                                web.map((web) => {

                                    return <div class="card ">
                                        <div class="card-body ">
                                            <h3 class="card-title text-center " style={{ fontSize: "18px", fontFamily: "cursive" }}>Webcode Submission</h3>
                                            <hr className="sidebar-divider my-3 " />
                                            <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Front End Source Code:</h3>
                                            <p class="card-text">{web.source}</p>
                                            <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Front End Deployed URL:</h3>
                                            <p class="card-text">{web.deployed}</p>
                                            <h5 class="card-text text-right" style={{ color: "royalblue", fontSize: "18px", fontFamily: "cursive" }}>Yet to be graded</h5>
                                        </div>
                                    </div>



                                })}
                        </div>
                    </>)}

                </div>
            </div>



        </>

    )
}

export default Webcode
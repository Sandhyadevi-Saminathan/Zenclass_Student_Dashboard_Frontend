import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Class() {
    const ids = localStorage.getItem('ID')
    const [isloading, setloading] = useState(false)
    const [pgloading, setpgloading] = useState(true)
    const [state, setstate] = useState({ name: "dayone" })
    const [clsdetail, setclsdetail] = useState([])
    const [activity, setactivity] = useState([])
    useEffect(() => {
        setpgloading(true)
        getclass();
        getactivity()

    }, [state])

    let getclass = async () => {

        const classdetail = await axios.get(`https://studentdashboard-1qg6.onrender.com/class/${state.name}`, {
            headers: {
                Authorization: `${window.localStorage.getItem("token")}`
            }

        })

        setclsdetail(classdetail.data)
        setpgloading(false)

    }
    let getactivity = async () => {

        const activitydetail = await axios.get(`https://studentdashboard-1qg6.onrender.com/activity/${state.name}`, {
            headers: {
                Authorization: `${window.localStorage.getItem("token")}`
            }

        })
        setactivity(activitydetail.data)

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
            setloading(true)
            values.id = ids
            values.state = state.name

            const task = await axios.post(`https://studentdashboard-1qg6.onrender.com/task/${state.name}`, values, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }

            })

            formik.resetForm()
        }
    })



    return (

        <>

            <div className='container'>
                <div className='row'>

                    <div className='col-lg-6'>
                        {pgloading ? (<div class="col d-flex justify-content-center" >
                            <h1 style={{ color: "tomato", maxwidth: "10rem", fontSize: "20px", fontFamily: "cursive" }}>Fetch the class details...Please wait</h1>
                        </div>) : (<div className='row -lg-3'>




                            {clsdetail.map((detail) => {
                                return <>
                                    <div class="card bg-primary mb-3" style={{ maxwidth: "18rem" }}>
                                        <h4 class="card-header" style={{ color: "white", maxwidth: "10rem", fontSize: "28px", fontFamily: "cursive" }}>Please watch the recording
                                            <Link className='btn btn-success ' to={detail.url} style={{ float: "right" }}>Play Recording</Link></h4>
                                        <hr className="sidebar-divider my-0 " /></div>
                                    <div class="card bg-light mb-3" style={{ maxwidth: "18rem" }}>
                                        <div class="card-body">
                                            <h5 class="card-title" style={{ color: "steelblue" }}>{detail.title}</h5>
                                            <h5 style={{ color: "steelblue" }}>{detail.datetime}</h5>
                                            <hr className="sidebar-divider my-3 " />
                                            <h4 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Contents:</h4>

                                            <p>
                                                <pre style={{ fontSize: "18px", fontFamily: "cursive" }}> {detail.content.c1}</pre>
                                                <pre style={{ fontSize: "18px", fontFamily: "cursive" }}>{detail.content.c2}</pre>
                                                <pre style={{ fontSize: "18px", fontFamily: "cursive" }}>{detail.content.c3}</pre>
                                            </p>


                                        </div>
                                    </div>
                                </>

                            })}


                            {activity.map((act) => {
                                return (<>
                                    <div >
                                        <h3 class="card-header" style={{ fontSize: "18px", fontFamily: "cursive" }}>Activities</h3>
                                        <hr className="sidebar-divider my-2 " />

                                        < h5 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>{act.question}</h5>

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
                                </>
                                )
                            })}


                            {/* {activity.question} */}

                            <br />

                        </div>)}


                    </div>
                    <div className='col-lg-6'>

                        <div class="card bg-white mb-3" style={{ maxwidth: "18rem" }}>
                            <div class="sideContainer">
                                <div class="roadmap-container justify-self-center">
                                    <div class="roadmap-area">
                                        <div class="progress-head">
                                            <span class="progress-header" style={{ fontSize: "18px", fontFamily: "cursive" }}>Sessions Roadmap</span>
                                        </div><div>
                                            <hr className="sidebar-divider my-0 " />
                                            <div class="card-body">
                                                <div class="sessionsContainer">
                                                    <div class="roadmap_icon_container RICompleted">
                                                        <h6 onClick={() => {
                                                            setstate({ name: "dayone" })
                                                            setloading(false)
                                                        }}>1</h6>

                                                    </div>
                                                    <div class="roadmap_icon_container RICompleted">
                                                        <h6 id='2' onClick={() => {
                                                            setstate({ name: "daytwo" })

                                                            setloading(false)

                                                        }}>2</h6>

                                                    </div>
                                                    <div class="roadmap_icon_container RICompleted">
                                                        <h6 id='3' onClick={() => {
                                                            setstate({ name: "daythree" })
                                                            setloading(false)

                                                        }}>3</h6>

                                                    </div>
                                                    <div class="roadmap_icon_container RICompleted">
                                                        <h6 id='4' onClick={() => {
                                                            setstate({ name: "dayfour" })
                                                            setloading(false)
                                                        }}>4</h6>

                                                    </div>
                                                    <div class="roadmap_icon_container RICompleted"><h6 onClick={() => {
                                                        setstate({ name: "dayfive" })
                                                        setloading(false)
                                                    }} >5</h6>

                                                    </div>
                                                    <div class="roadmap_icon_container RIUnselect"><h6>6</h6></div>
                                                    <div class="roadmap_icon_container RIUnselect"><h6>7</h6></div>
                                                    <div class="roadmap_icon_container RIUnselect"><h6>8</h6></div>
                                                    <div class="roadmap_icon_container RIUnselect">
                                                        <h6>9</h6></div>
                                                    <div class="roadmap_icon_container RIUnselect">
                                                        <h6>10</h6>
                                                    </div>
                                                    <div class="roadmap_icon_container RIUnselect"><h6>11</h6>
                                                    </div>
                                                    <div class="roadmap_icon_container RIUpcoming"><h6>12</h6>
                                                    </div>
                                                    <div class="roadmap_icon_container RIUpcoming"><h6>13</h6>
                                                    </div>
                                                    <div class="roadmap_icon_container RIUpcoming"><h6>14</h6>
                                                    </div>
                                                    <div class="roadmap_icon_container RIUpcoming"><h6>15</h6>
                                                    </div>


                                                </div>
                                            </div>
                                            <hr className="sidebar-divider my-0 " />
                                            <h5 class="card-title" style={{ fontSize: "18px", fontFamily: "cursive" }}>Additional Sessions</h5>
                                            <h5 style={{ textAlign: "center", color: "gray" }}>No additional sessions</h5>
                                        </div>
                                    </div>
                                </div >
                            </div>
                        </div>




                    </div>
                </div>
            </div >

        </>
    )
}

export default Class
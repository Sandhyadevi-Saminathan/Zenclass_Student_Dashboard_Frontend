import React, { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useEffect } from 'react'

function Leave() {
    const [pgloading, setpgloading] = useState(true)
    const ids = localStorage.getItem('ID')
    const [leave, setleave] = useState(true)
    const [leavedet, setleavedet] = useState([])
    useEffect(() => {
        getleave()

    }, [])

    let getleave = async () => {
        const leave = await axios.get(`http://localhost:8000/leaves/${ids}`, {
            headers: {
                Authorization: `${window.localStorage.getItem("token")}`
            }

        })
        setleavedet(leave.data)
        setpgloading(false)

    }

    const formik = useFormik({
        initialValues: {
            days: "",
            date: "",
            reason: ""

        },


        validate: (values) => {

            let errors = {}
            if (!values.days) {
                errors.days = "Enter number of days"
            }
            if (!values.date) {
                errors.date = "Mention the date"
            }
            if (!values.reason) {
                errors.reason = "Enter the reason"
            }

            return errors;
        },
        onSubmit: async (values) => {
            setpgloading(true)
            values.id = ids
            const leavedet = await axios.post(`http://localhost:8000/leave`, values, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }

            })

            formik.resetForm()
            getleave()
            setleave(true)
        }
    })

    return (

        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div class="Navbar_navbar__container__3Q3Zl">
                            <div class="sc-jTrPJq gFWlwy">
                                <button onClick={() => {
                                    setleave(false)
                                }} class="NavButtons_add__button__q_2E5" style={{ fontSize: "18px", fontFamily: "cursive" }}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3018/3018447.png" alt="add/plus" style={{ width: "25px" }} />ADD</button>
                            </div>
                        </div>
                        {!leave ?
                            (
                                <form onSubmit={formik.handleSubmit}>
                                    <div class="col-lg-6">
                                        <br />
                                        <label>Days
                                        </label><br />
                                        <input
                                            type="text"
                                            name='days'
                                            value={formik.values.days}
                                            onChange={formik.handleChange}
                                            className={`form-control `} />
                                        <span style={{ color: "red" }}>{formik.errors.days}</span>

                                    </div>
                                    <div className='form-group col-lg-4'>
                                        <label>Date</label>
                                        <input className={`form-control ${formik.errors.date ? "is-invalid" : "is-valid"} `}
                                            name='date'
                                            onChange={formik.handleChange}
                                            type="date"
                                            value={formik.values.date}
                                            placeholder='date'></input>
                                        <span style={{ color: "red" }}>{formik.errors.date}</span>
                                    </div>
                                    <div class="col-lg-6">
                                        <br />
                                        <label>Reason
                                        </label><br />
                                        <input
                                            type="text"
                                            name='reason'
                                            value={formik.values.reason}
                                            onChange={formik.handleChange}
                                            className={`form-control `} />
                                        <span style={{ color: "red" }}>{formik.errors.reason}</span>

                                    </div>

                                    <div class="col-12">
                                        <input type={"submit"} value={"Submit"}
                                            className='btn btn-primary mt-3' />
                                        <button type="submit" onClick={() => { setleave(true) }} class="btn btn-primary mt-3 ml-3">Back</button>
                                    </div>
                                </form>
                            )


                            :
                            null
                        }

                    </div>
                    <div className='col-lg-6'>
                        {pgloading ? (<div class="col d-flex justify-content-center" >
                            <h1 style={{ color: "tomato", maxwidth: "10rem", fontSize: "40px", fontFamily: "cursive" }}>Loading</h1>
                        </div>) : (leavedet.length == 0 ?
                            (<h2 style={{ fontSize: "18px", fontFamily: "cursive" }}>Not yet applied for any leave</h2>)
                            : (
                                <>
                                    <h3 class="card-title text-center " style={{ fontSize: "18px", fontFamily: "cursive" }}>Leave Submission</h3>

                                    {leavedet.map((leaves) => {
                                        return <div class="card ">
                                            <div class="card-body ">
                                                <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Days</h3>
                                                <p class="card-text">{leaves.days}</p>
                                                <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Date</h3>
                                                <p class="card-text">{leaves.date}</p>
                                                <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Reason</h3>
                                                <p class="card-text">{leaves.reason}</p>

                                            </div>
                                        </div>

                                    })}
                                </>

                            )
                        )}


                    </div>
                </div>

            </div>


        </>
    )
}

export default Leave
import React, { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useEffect } from 'react'

function Testimonial() {
    const ids = localStorage.getItem('ID')
    const [pgloading, setpgloading] = useState(true)
    const [test, settest] = useState(true)
    const [testdet, settestdet] = useState([])
    useEffect(() => {
        gettest()

    }, [])

    let gettest = async () => {
        const test = await axios.get(`https://studentdashboard-1qg6.onrender.com/testmonial/${ids}`, {
            headers: {
                Authorization: `${window.localStorage.getItem("token")}`
            }

        })
        settestdet(test.data)
        setpgloading(false)

    }

    const formik = useFormik({
        initialValues: {
            photo: "",
            video: "",
            description: ""

        },


        validate: (values) => {

            let errors = {}
            if (!values.photo) {
                errors.photo = "Upload your photo"
            }
            if (!values.video) {
                errors.video = "Upload video URL"
            }
            if (!values.description) {
                errors.description = "Enter the description"
            }

            return errors;
        },
        onSubmit: async (values) => {
            setpgloading(true)
            values.id = ids;
            const testdet = await axios.post(`https://studentdashboard-1qg6.onrender.com/testmo`, values, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }

            })

            formik.resetForm()
            gettest()
            settest(true)
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
                                    settest(false)
                                }} class="NavButtons_add__button__q_2E5" style={{ fontSize: "18px", fontFamily: "cursive" }}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3018/3018447.png" alt="add/plus" style={{ width: "25px" }} />Add Testimonial</button>
                            </div>
                        </div>
                        {!test ?
                            (
                                <form onSubmit={formik.handleSubmit}>
                                    <div class="col-lg-6">
                                        <br />
                                        <label>Photo
                                        </label><br />
                                        <input
                                            type="file"
                                            name='photo'
                                            value={formik.values.photo}
                                            onChange={formik.handleChange}
                                            className={`form-control `} />
                                        <span style={{ color: "red" }}>{formik.errors.photo}</span>

                                    </div>
                                    <div className='form-group col-lg-4'>
                                        <label>Video</label>
                                        <input className={`form-control ${formik.errors.video ? "is-invalid" : "is-valid"} `}
                                            name='video'
                                            onChange={formik.handleChange}
                                            type="text"
                                            value={formik.values.video}
                                            placeholder='Video URL'></input>
                                        <span style={{ color: "red" }}>{formik.errors.video}</span>
                                    </div>
                                    <div class="col-lg-6">
                                        <br />
                                        <label>Description
                                        </label><br />
                                        <input
                                            type="text"
                                            name='description'
                                            value={formik.values.description}
                                            onChange={formik.handleChange}
                                            className={`form-control `} />
                                        <span style={{ color: "red" }}>{formik.errors.description}</span>

                                    </div>

                                    <div class="col-12">
                                        <input type={"submit"} value={"Submit"}
                                            className='btn btn-primary mt-3' />
                                        <button type="submit" onClick={() => { settest(true) }} class="btn btn-primary mt-3 ml-3">Back</button>
                                    </div>
                                </form>
                            )


                            :
                            null
                        }

                    </div>
                    {pgloading ? (<div class="col d-flex justify-content-center" >
                        <h1 style={{ color: "tomato", maxwidth: "10rem", fontSize: "40px", fontFamily: "cursive" }}>Loading</h1>
                    </div>) : (<div className='col-lg-6'>

                        {testdet.length == 0 ?
                            (<h5 class="card-title " style={{ fontSize: "25px", fontFamily: "cursive" }}>You have not submitted testimonial yet.</h5>)
                            : (<>

                                <h3 class="card-title text-center mb-2" style={{ fontSize: "18px", fontFamily: "cursive" }}>Testimonial</h3>
                                {testdet.map((tests) => {
                                    return <div class="card ">
                                        <div class="card-body ">

                                            <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Photo</h3>
                                            <p class="card-text">{tests.photo}</p>
                                            <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Video</h3>
                                            <p class="card-text">{tests.video}</p>
                                            <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Description</h3>
                                            <p class="card-text">{tests.description}</p>

                                        </div>
                                    </div>

                                })}


                            </>

                            )
                        }

                    </div>)}

                </div>

            </div>


        </>
    )
}

export default Testimonial
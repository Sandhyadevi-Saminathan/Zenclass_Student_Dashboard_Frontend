import React, { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useEffect } from 'react'

function Queries() {
    const [pgloading, setpgloading] = useState(true)
    const ids = localStorage.getItem('ID')
    const [query, setquery] = useState(true)
    const [querydet, setquerydet] = useState([])
    useEffect(() => {
        getquery()


    }, [])

    let getquery = async () => {
        const query = await axios.get(`https://studentdashboard-1qg6.onrender.com/query/${ids}`, {
            headers: {
                Authorization: `${window.localStorage.getItem("token")}`
            }

        })
        setquerydet(query.data)
        setpgloading(false)

    }

    const formik = useFormik({
        initialValues: {
            query: "",

        },


        validate: (values) => {

            let errors = {}
            if (!values.query) {
                errors.query = "Enter your Query"
            }

            return errors;
        },
        onSubmit: async (values) => {
            setpgloading(true)
            values.id = ids
            const task = await axios.post(`https://studentdashboard-1qg6.onrender.com/query`, values, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }

            })


            formik.resetForm()
            getquery()
            setquery(true)
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
                                    setquery(false)
                                }} class="NavButtons_add__button__q_2E5" style={{ fontSize: "18px", fontFamily: "cursive" }}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3018/3018447.png" alt="add/plus" style={{ width: "25px" }} />Create Query</button>
                            </div>
                        </div>
                        {!query ?
                            (
                                <form onSubmit={formik.handleSubmit}>
                                    <div class="col-lg-6">
                                        <br />
                                        <label for="appealSolvedSolutionArea" style={{ color: "rgb(126, 142, 159)" }}>Enter your query
                                        </label><br />
                                        <textarea
                                            name='query'
                                            value={formik.values.query}
                                            onChange={formik.handleChange}
                                            className={`form-control `} />
                                        <span style={{ color: "red" }}>{formik.errors.query}</span>

                                    </div>
                                    <div class="col-12">
                                        <input type={"submit"} value={"Submit"}
                                            className='btn btn-primary mt-3' />
                                        <button type="submit" onClick={() => { setquery(true) }} class="btn btn-primary mt-3 ml-3">Back</button>
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
                        </div>) : (querydet.length == "" ?
                            (<h2 style={{ fontSize: "18px", fontFamily: "cursive" }}>No queries to display</h2>)
                            : (
                                <div class="card ">
                                    <div class="card-body ">

                                        {querydet.map((queries) => {
                                            return <>

                                                <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Querry Details :
                                                    <span class="card-text" style={{ color: "black" }}>{queries.query}</span></h3>

                                                <h5 class="card-text text-right" style={{ color: "royalblue", fontSize: "18px", fontFamily: "cursive" }}>Mentor not yet assigned for this query</h5>


                                            </>
                                        })}

                                    </div>
                                </div>
                            )
                        )}


                    </div>
                </div>

            </div>


        </>
    )
}

export default Queries
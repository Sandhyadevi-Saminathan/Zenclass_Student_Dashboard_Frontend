import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Placement() {
    const [pgloading, setpgloading] = useState(true)
    const [placement, setplacement] = useState([])
    useEffect(() => {
        getplace()
    }, [])
    let getplace = async () => {
        const user = await axios.get("https://studentdashboard-1qg6.onrender.com/placement", {
            headers: {
                Authorization: `${window.localStorage.getItem("token")}`
            }

        })
        setplacement(user.data)
        setpgloading(false)
    }
    return (
        <>


            <div className='container'>
                <div className='row'>
                    {pgloading ? (<div class="col d-flex justify-content-center" >
                        <h1 style={{ color: "tomato", maxwidth: "10rem", fontSize: "40px", fontFamily: "cursive" }}>Loading</h1>
                    </div>) : (placement.map((placements) => {
                        return (
                            <div className='col-lg-4'>
                                <div class="card border-primary mb-3">
                                    <div class="card ">
                                        <div class="card-body bg-white">
                                            <h5 class="card-title" style={{ color: "tomato", fontSize: "30px", fontFamily: "cursive" }}>{placements.name}</h5>
                                            <p class="card-text" style={{ fontSize: "20px", fontFamily: "cursive" }}>{placements.course}</p>
                                            <hr className="sidebar-divider my-0 mb-2" />
                                            <h3 style={{ color: "purple", fontSize: "18px", fontFamily: "cursive" }}>Company:
                                                <span class="card-text" >{placements.company}</span> </h3>
                                            <h3 style={{ color: "purple", fontSize: "18px", fontFamily: "cursive" }}>CTC
                                                <span class="card-text" >{placements.ctc}</span> </h3>

                                            <h3 style={{ color: "purple", fontSize: "18px", fontFamily: "cursive" }}>Placed Through:
                                                <span class="card-text" >{placements.placed}</span> </h3>



                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }))}




                </div>

            </div>

        </>
    )
}

export default Placement
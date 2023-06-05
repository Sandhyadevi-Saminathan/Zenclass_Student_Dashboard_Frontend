import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Task() {
    const ids = localStorage.getItem('ID')
    const [pgloading, setpgloading] = useState(true)
    const [task, settask] = useState([])

    useEffect(() => {
        gettask()
    }, [])

    let gettask = async () => {
        try {
            const taskdet = await axios.get(`https://studentdashboard-1qg6.onrender.com/task/${ids}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }

            })
            settask(taskdet.data)
            setpgloading(false)
        } catch (error) {
            console.log(error)
        }

    }


    return (


        <>
            {pgloading ? (<div class="col d-flex justify-content-center" >
                <h1 style={{ color: "tomato", maxwidth: "10rem", fontSize: "40px", fontFamily: "cursive" }}>Loading</h1>
            </div>) : (


                task.length === 0 ?
                    (<h2 style={{ fontSize: "18px", fontFamily: "cursive" }}>Task not yet submitted</h2>)


                    :

                    task.map((tasks) => {


                        return <div class="col d-flex justify-content-center">
                            <div class="card w-50 mb-3 mt-2">
                                <div class="card-body ">

                                    <h3 class="card-title text-center " style={{ fontSize: "18px", fontFamily: "cursive" }}>Task details</h3>
                                    <hr className="sidebar-divider my-3 " />
                                    <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Front End Source Code:</h3>
                                    <p class="card-text">{tasks.source}</p>
                                    <h3 style={{ color: "tomato", fontSize: "18px", fontFamily: "cursive" }}>Front End Deployed URL:</h3>
                                    <p class="card-text">{tasks.deployed}</p>
                                    <h5 class="card-text text-right" style={{ color: "royalblue", fontSize: "18px", fontFamily: "cursive" }}>Yet to be graded</h5>
                                </div>
                            </div>
                        </div>


                    })


            )}





        </>

    )
}

export default Task
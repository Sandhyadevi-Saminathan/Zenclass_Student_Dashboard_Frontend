import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'



function Portal() {
    return (
        <>
            <div id="wrapper" >

                <Sidebar ></Sidebar>




                <div id="content-wrapper" className="d-flex flex-column" >
                    <div id="content" >

                        <Topbar></Topbar >


                        <div className="container-fluid" style={{ paddingTop: "10px", paddingLeft: "260px" }}>

                            <Outlet ></Outlet>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Portal
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../Context/Usercontext'


function Sidebar() {
    const userData = useContext(UserContext)


    return (
        <>



            <ul className="navbar-nav bg-gradient-info sidebar fixed-top sidebar-dark accordion mb-4 static-top shadow" id="accordionSidebar" style={{ fontFamily: "cursive" }} >

                {/* <!-- Sidebar - Brand --> */}
                <div className="sidebar-brand d-flex align-items-center justify-content-center" href="" style={{ fontSize: "20px", color: "black" }}  >





                </div>
                <br />
                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0 " />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <Link className="nav-link mt-3" to="/portal/class" onClick={() => {
                        userData.setuser({ name: "Class" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Class</span></Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/dashboard" onClick={() => {
                        userData.setuser({ name: "Dashboard" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Dashboard</span></Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/task" onClick={() => {
                        userData.setuser({ name: "Task" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}> Task</span></Link>

                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/webcode" onClick={() => {
                        userData.setuser({ name: "Webcode" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Webcode</span></Link>

                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/capstone" onClick={() => {
                        userData.setuser({ name: "Capstone" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Capstone</span></Link>

                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/queries" onClick={() => {
                        userData.setuser({ name: "Queries" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Queries</span></Link>

                </li>

                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/portfolio" onClick={() => {
                        userData.setuser({ name: "Portfolio-Submission" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Portfolio-Submission</span></Link>

                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/application" onClick={() => {
                        userData.setuser({ name: "Application" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Application</span></Link>

                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/interviewtask" onClick={() => {
                        userData.setuser({ name: "Interview Task" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Interviewtasks</span></Link>

                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/leave" onClick={() => {
                        userData.setuser({ name: "Leave Application" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Leave Apllication</span></Link>

                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/mock" onClick={() => {
                        userData.setuser({ name: "Mock-Interview" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Mock Interview</span></Link>

                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/certificate" onClick={() => {
                        userData.setuser({ name: "Certificate" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Certificate</span></Link>

                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/testimonial" onClick={() => {
                        userData.setuser({ name: "Testimonial" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Testimonial</span></Link>

                </li>

                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/syllabus" onClick={() => {
                        userData.setuser({ name: "Syllabus" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Syllabus</span></Link>

                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/placement" onClick={() => {
                        userData.setuser({ name: "Placement Board" })
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Placement Board</span></Link>

                </li>
            </ul >





        </>
    )
}

export default Sidebar
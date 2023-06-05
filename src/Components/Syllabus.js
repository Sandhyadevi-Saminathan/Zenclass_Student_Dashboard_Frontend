import React from 'react'

function Syllabus() {
    return (
        <>
            <div class="col d-flex justify-content-center">
                <div class="card" style={{ width: "25rem", marginTop: "20px" }}>
                    <div class="card-body">
                        <h5 class="card-title text-center" style={{ color: "tomato", fontSize: "25px", fontFamily: "cursive" }}>Course</h5>
                        <hr className="sidebar-divider my-4" />
                        <h6 class="card-subtitle mb-2 text-muted" style={{ fontSize: "25px", fontFamily: "cursive" }}>FSD MERN -
                            <a href="/download/mern.pdf" download > Download</a></h6>



                    </div>
                </div>
            </div>

        </>
    )
}

export default Syllabus
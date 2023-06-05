import React from 'react'
import Card from './Card';

import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Filler, } from 'chart.js';
import { createSearchParams, useSearchParams } from 'react-router-dom';
ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

function Dashboard() {


    return (
        <>


            < div className="d-sm-flex align-items-center justify-content-between mb-4">


            </div>
            <div className="row">


                <Card title="Codekata Completion" solved="10" color="border-left-primary" textcolor="text-primary" />
                <Card title="Webkata Completion" solved="5" color="border-left-success" textcolor="text-success" />
                <Card title="Assigned Task" solved="5" color="border-left-info" textcolor="text-info" />
                <Card title=" Completed task" solved="0" color="border-left-warning" textcolor="text-warning" />


            </div >
            <div className='row'>
                <div className='col-lg-4'>
                    <Doughnut data={{
                        labels: [
                            'Codekata',
                            'Webkata',
                            'Class Attended'
                        ],
                        datasets: [{
                            label: 'Problems Solved',
                            data: [10, 5, 40],
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                            ],
                            hoverOffset: 4
                        }]
                    }} />
                </div>
                <div className='col-lg-8'>
                    <Line options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'Chart.js Line Chart',
                            },
                        },
                    }} data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug'],
                        datasets: [{
                            label: 'Attendance Percentage',
                            data: [0, 0, 0, 0, 25, 30, 0, 0],
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }]
                    }} />;


                </div>
            </div>
        </>
    )
}

export default Dashboard
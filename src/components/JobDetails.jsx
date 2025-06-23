import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const JobDetails = () => {

    const jobDetails = useLoaderData()


  return (
    <div className='job-details'>
       <p><b>Job Title : </b> {jobDetails.title}</p>
       <p><b>Salary : </b> {jobDetails.salary}</p>
       <p><b>Job Location : </b> {jobDetails.location}</p>
       <p><b>Description : </b> {jobDetails.description}</p>

       <button>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async ({params}) => {
     const {id} =  params
     const res =  await fetch(`http://localhost:5000/jobs/${id}`)
     return res.json()
}

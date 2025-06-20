import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {
    const jobsData  = useLoaderData()
  return (
    <div className='jobs'>
      {jobsData.map((job)=>{
       return <Link>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
        </Link>
})}
    </div>
  )
}

export default Jobs


export const jobLoader =  async() => {
   const res =  await fetch('http://localhost:5000/jobs')
   return res.json()
}
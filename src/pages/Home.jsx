import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container text-left mt-5'>
      <h1 className='display-3'>Find your perfect companion</h1>
      <p className='lead'>Browse our selection of 30 cats, each with their own unique story.</p>
      <Link to="/cats" className='btn btn-primary btn-lg mt-3'>Discover our cats</Link>
    </div>
  )
}

export default Home
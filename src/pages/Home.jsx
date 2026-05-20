import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Find your perfect companion</h1>
      <p>Browse our selection of 30 cats, each with their own unique story.</p>
      <Link to="/cats">Discover our cats</Link>
    </div>
  )
}

export default Home
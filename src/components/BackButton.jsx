import React from 'react'
import { Link } from 'react-router-dom'

function BackButton({url}) {
  return (
<Link to={url}> <button className='btn btn-lg-danger'>back</button></Link>
  )
}

export default BackButton
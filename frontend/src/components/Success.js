import React from 'react'
// eslint-disable-next-line
import { Link } from "react-router-dom"


const Success = () => { 
    return (
        <div className='container mb-6 mt-5' >       
          <h3> You have beeen successfuly logged in </h3>
           <br />
           {/* <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup Page</Link> */}
        </div>

    )
}

export default Success

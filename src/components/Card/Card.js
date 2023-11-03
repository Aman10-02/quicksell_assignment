import React from 'react'
import { FaCircle, FaUser } from 'react-icons/fa6'
import "./card.css"
function Card({details, group}) {
    console.log(details)
  return (
    <div className="card-container">
        <div className='card-box'>
            <div className="card-header">
                <p> {details.id} </p>
                 { group !== "userId" &&
                    <FaUser /> }
            </div>
            <div className="card-content">
                <div className='icon-card' >
                    <FaUser />
                </div>
                <div className='card-title'>
                    {details.title}
                </div>
            </div>
            <div className="card-footer">
                <div className='icon-card' >
                    <FaUser />
                </div>
                <div className='card-tag' >
                    <FaCircle className='card-tag-circle'  />
                    {details.tag}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
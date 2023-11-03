import React from 'react'
import { FaCircle } from 'react-icons/fa6'
import { FaEllipsis, FaPlus, FaUser, FaTriangleExclamation, FaCircleCheck } from 'react-icons/fa6'
import { PiCellSignalFullFill, PiCellSignalMediumFill, PiCellSignalLowFill  } from 'react-icons/pi'
import { BsCircle } from 'react-icons/bs'
import { TbProgressCheck, TbCircleDotted  } from 'react-icons/tb'
import { GiCancel  } from 'react-icons/gi'
import "./card.css"
function Card({details, group, priorityIcons, statusIcons, name}) {
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
                { group !== "status" &&
                <>
                    <div className='icon-card' >
                        {statusIcons[details.status]}
                    </div>
                </>
                    
                }
                <div className='card-title'>
                    {details.title}
                </div>
            </div>
            <div className="card-footer">
                    { group !== "priority" &&
                        <>
                            <div className='icon-card' >
                                {priorityIcons[details.priority]}
                            </div>
                        </>
                    }
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
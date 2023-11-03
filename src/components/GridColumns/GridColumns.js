import React from 'react'
import "./gridColumns.css"
import { FaEllipsis, FaPlus, FaUser, FaTriangleExclamation, FaCircleCheck } from 'react-icons/fa6'
import { PiCellSignalFullFill, PiCellSignalMediumFill, PiCellSignalLowFill  } from 'react-icons/pi'
import { BsCircle } from 'react-icons/bs'
import { TbProgressCheck, TbCircleDotted  } from 'react-icons/tb'
import { GiCancel  } from 'react-icons/gi'
import Card from '../Card/Card'
function GridColumns({name, values, users, group}) {
    const pri = {
        "4" : "Urgent",
        "3" : "High",
        "2" : "Medium",
        "1" : "Low",
        "0" : "No priority"
    }
    const priorityIcons = {
        "4" :  < FaTriangleExclamation />,
        "3" :  <PiCellSignalFullFill />,
        "2" : <PiCellSignalMediumFill />,
        "1" :  <PiCellSignalLowFill />,
        "0" :  <FaEllipsis/>
    }
    const statusIcons = {
        "Todo" : <BsCircle />,
        "In progress" : <TbProgressCheck />,
        "Backlog" : <TbCircleDotted/>,
        "Done" : <FaCircleCheck/>,
        "Cancelled" : <GiCancel/>
    }
    let toDisplay = name;
    let iconDis = <FaUser />;
    if(group === "userId"){
        toDisplay = (users.find(usr => usr.id === name).name);
    }else if(group === "priority"){
        toDisplay =  pri[name];
        iconDis = priorityIcons[name];
    }else{
        iconDis = statusIcons[name];
    }
    
  return (
    <div className='column-container'>
        <div className='column-header'>
            <div className='column-left'>
                {iconDis}
                <span>{toDisplay}</span>
                <span>{values.length}</span>
            </div>
            <div className='column-right'>
                <FaPlus />
                <FaEllipsis className='column-header-icon' />
            </div>
        </div>
        <div className='column-body'>
            {
                values.map( (e) => <Card details = {e} group = {group} priorityIcons = {priorityIcons} statusIcons = {statusIcons} name = {name} />)
            }
        </div>
        {/* <Card>

        </Card> */}
    </div>
  )
}

export default GridColumns
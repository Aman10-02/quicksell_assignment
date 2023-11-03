import React, { useState } from 'react'
import { FaAngleDown, FaAlignJustify } from "react-icons/fa6";
import "./navbar.css"
function Navbar({setOrder, setGroup, order, group}) {
    const [isSelect, setIsSelect] = useState(false) ;
  return (
    <div className="nav-container">
        <div className="nav-btn-container">
        <button  className="nav-btn"
          onClick={() => setIsSelect(!isSelect)}
        >
            
         <FaAlignJustify className='nav-icon' />
         Display
         <FaAngleDown  className='nav-icon'  />
        </button>
        {isSelect && (
            <div className="drop">
              <div className='s-group' >
                <span>Grouping</span>
                <select value={group}
                    onChange={(e) => {
                    localStorage.setItem("group", e.target.value);
                    setGroup(e.target.value)
                    setIsSelect(!isSelect)
                }} 
                    className="s-style" 
                    name="group" id="group"
                >
                  <option value="status">Status</option>
                  <option value="userId">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className='s-group'>
                <span>Ordering</span>
                <select value={order} 
                    onChange={(e) => {
                        localStorage.setItem("order", e.target.value);
                        setOrder(e.target.value);
                        setIsSelect(!isSelect);
                    }} 
                    className="s-style" 
                    name="order" 
                    id="order"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
         )}
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import GridColumns from '../GridColumns/GridColumns';
import './gridBox.css'
function GridBox({tickets, users, order, group}) {
    const items = {};
    console.log("order", order);
    for (let index = 0; index < tickets.length; index++) {
        const element = tickets[index];
        if(!items[element[group]]){
            items[element[group]] = [];
        }
        items[element[group]].push(element);
    }
    // console.log("items", items);
    for (const key in items) {
        if(order === "title"){
            items[key].sort((a, b) => a[order].localeCompare(b[order]));
        }else{
            items[key].sort((a, b) => b[order] - a[order]);
        } 
    }
  return (
      <div className='gridbox-container' > 
       { 
       Object.entries(items).map(([e,v]) => {

        //    console.log("e", e);
        //    console.log(v);
           return (
                <div style={{height: "100%"}}>
                    <GridColumns name = {e} values = {v} users = {users} group = {group} />
                </div>
               )
           //     {JSON.stringify(e)} 
        }
       )}
        </div>
  )
}

export default GridBox
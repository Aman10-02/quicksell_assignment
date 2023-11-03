import React, { useEffect, useState } from 'react';
import GridBox from './components/GridBox/GridBox'
import Navbar from './components/navbar/Navbar';
import "./app.css"

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [group, setGroup] = useState( localStorage.getItem("group") || "status");
  const [order, setOrder] = useState(localStorage.getItem("order") || "priority");
  const getTickets = async () => {
    const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
    const data = await response.json();
    // console.log(data)
    setTickets(data.tickets);
    setUsers(data.users);
  }
  useEffect( () => {
    getTickets();
  }, [])
  // console.log(tickets)
  return (
    <div className="app">
      <Navbar setOrder = {setOrder} setGroup = {setGroup} order = {order} group = {group} />
      <GridBox tickets={tickets} users = {users} order = {order} group = {group} />
    </div>
  );
}

export default App;

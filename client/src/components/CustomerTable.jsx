import React, { useState, useEffect } from "react";
import axios from "axios";


const CustomerTable = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = async () => {
    const fetch = await axios.get(`http://localhost:1337/api/customers/`)

    console.log(fetch)
  }

  return (
    <div className="customer-table">

    </div>
  )
}

export default CustomerTable;
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
    setCustomers(fetch.data)
  }


  return (
    <div className="customers-table">
      <div className="customers-table header row">Customers</div>
      <div className="customers-table body">
        {
          customers.map(customer => {
            return (
              <div className="customers-table body item row">
                <div className="customers-table body item info">
                  <div className="customers-table body item info name">{customer.firstName} {customer.lastName}</div>
                  <div className="customers-table body info email">{customer.email}</div>
                </div>
                <div className="customers-table body item date">{customer.lastOrderDate}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CustomerTable;
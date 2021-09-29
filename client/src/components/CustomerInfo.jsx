import React from "react";


const CustomerInfo = (props) => {

  const { customers } = props

  return (
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

  )
}

export default CustomerInfo;
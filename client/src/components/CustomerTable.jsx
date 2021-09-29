import React, { useState, useEffect } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator"


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

  const columns = [
    {
      dataField: 'firstName',
      text: 'First Name'
    },
    {
      dataField: 'lastName',
      text: 'Last Name'
    },
    {
      dataField: 'lastOrderDate',
      text: 'Last Order Date'
    },
    {
      dataField: 'lastOrderPrice',
      text: 'Last Order Price'
    },
    {
      dataField: 'state',
      text: 'State'
    }
  ]

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );


  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value: customers.length
    }],// A numeric array is also available. the purpose of above example is custom the text
  };

  return (
    <BootstrapTable keyField='id' data={customers} columns={columns} pagination={paginationFactory(options)} />
  )
}

export default CustomerTable;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Box } from "@mui/system";
import Toast from "./Toast/Toast";

const CustomerTable = () => {
  const [customers, setCustomers] = useState([])
  const [selectedCustomers, setSelectedCustomers] = useState([])
  // const [isDeleted, setIsDeleted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = async () => {
    const fetch = await axios.get(`/api/customers/`)
    setCustomers(fetch.data)
  }

  const deleteCustomers = async () => {
    try {
      setOpen(false)
      const data = { selectedCustomers }
      await axios.delete('/api/customers/', { data })
      setOpen(true)
      fetchCustomers()
    } catch (err) {
      console.log(err)
    }
  }

  const updatedSelectedCustomers = (selection) => {
    // Filter customers by only currently selected rows by id
    const result = customers.filter(({ id }) => selection.includes(id));
    setSelectedCustomers(result)
  }

  const columns = [
    { field: 'id', headerName: 'ID', flex: 'shrink' },
    { field: 'firstName', headerName: 'First Name', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
    { field: 'lastOrderDate', headerName: 'Last Order Date', flex: 1, type: 'date' },
    { field: 'lastOrderPrice', headerName: 'Last Order Price', flex: 1, type: 'number' }

  ]

  // Render Table Component
  return (
    <React.Fragment>
      <div style={{ height: '60vh', width: '100%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              checkboxSelection
              rows={customers}
              columns={columns}
              onSelectionModelChange={updatedSelectedCustomers}
            />
          </div>
        </div>
        <Box sx={{ display: 'flex', gap: 2 }} >

          <Button
            variant="outlined"
            sx={{ mt: 3 }}
            disabled={selectedCustomers.length > 0 ? false : true}
          >
            <Link
              style={{ textDecoration: 'none', color: 'inherit' }}
              to={{
                pathname: selectedCustomers.length > 0 ? '/message' : '#',
                state: { selectedCustomers }
              }}>
              Send Message
            </Link>
          </Button>
          <Link
            style={{ textDecoration: 'none' }}
            to={{
              pathname: '/message-logs'
            }}>
            <Button variant="outlined" sx={{ mt: 3 }}>Message Log</Button>
          </Link>
          <Button
            variant="outlined"
            color="error"
            sx={{ mt: 3, ml: 'auto' }}
            disabled={selectedCustomers.length > 0 ? false : true}
            onClick={deleteCustomers}
          >
            Delete
          </Button>
        </Box>
        {open ? <Toast message={'Customer(s) Deleted'} isOpen={open} /> : null}
      </div>
    </React.Fragment >
  )
}

export default CustomerTable;
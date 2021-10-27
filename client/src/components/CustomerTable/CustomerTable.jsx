import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid'
import Toast from "../Toast/Toast";
import TableActionsButtons from "../TableActionButtons/TableActionsButtons";

const CustomerTable = () => {
  const [customers, setCustomers] = useState([])
  const [selectedCustomers, setSelectedCustomers] = useState([])
  const [open, setOpen] = useState(false)
  const [tstMsg, setTstMsg] = useState('')

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = async () => {
    try {
      const fetch = await axios.get(`/api/customers/`)
      setCustomers(fetch.data)
    } catch (err) {
      console.log(err)
      setOpen(true)
      setTstMsg('Cannot fetch customers from DB.')
    }
  }

  const deleteCustomers = async () => {
    try {
      setOpen(false)
      const data = { selectedCustomers }
      await axios.delete('/api/customers/', { data })
      setOpen(true)
      setTstMsg('Customer(s) deleted.')
      fetchCustomers()
    } catch (err) {
      console.log(err)
      setOpen(true)
      setTstMsg('Cannot delete customers.')
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
    <>
      <div style={{ height: 'auto', width: '100%' }}>
        <div style={{ display: 'flex', height: '60vh' }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              checkboxSelection
              rows={customers}
              columns={columns}
              onSelectionModelChange={updatedSelectedCustomers}
            />
          </div>
        </div>

        {/* Table Action Buttons */}
        <TableActionsButtons selectedCustomers={selectedCustomers} deleteCustomers={deleteCustomers} />
        {/* Toast Notificaiotn on customer delete */}
        {open ? <Toast message={tstMsg} isOpen={open} /> : null}
      </div>
    </>
  )
}

export default CustomerTable;
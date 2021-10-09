import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const MessageTable = () => {
  const [messages, setMessages] = useState([])
  // const [selectedCustomers, setSelectedCustomers] = useState([])

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    const fetch = await axios.get(`http://localhost:1337/api/message`)

    console.log(fetch)
    setMessages(fetch.data)
  }

  const rows = messages


  const Row = (props) => {
    const { row } = props
    const [open, setOpen] = useState(false)

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">{row.id}</TableCell>
          <TableCell>{row.text}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 5 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="customers">
                  <TableHead>
                    <TableRow>
                      <TableCell>Customer Id</TableCell>
                      <TableCell>Customer Name</TableCell>
                      <TableCell>Sent</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.customers.map(customer => {
                      return (
                        <TableRow key={customer.id}>
                          <TableCell component="th" scope="row">{customer.id}</TableCell>
                          <TableCell>{`${customer.firstName} ${customer.lastName}`}</TableCell>
                          <TableCell>{customer.customerMessage.dateSent}</TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    )
  }


  // Render Table Component
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ flex: 'shrink' }} />
            <TableCell >Message Id</TableCell>
            <TableCell >Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <Row key={row.id} row={row} />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MessageTable
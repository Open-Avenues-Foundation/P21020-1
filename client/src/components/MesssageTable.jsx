import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Toast from "./Toast/Toast";

const MessageTable = () => {
  const [messages, setMessages] = useState([])
  const [isRedirect, setIsRedirect] = useState(false)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    const fetch = await axios.get(`/api/message`)

    console.log(fetch)
    setMessages(fetch.data)
  }

  const sendMessage = (messageData) => {
    console.log(messageData)
    const data = { message: messageData.text, selectedCustomers: messageData.customers }
    console.log(data)
    axios.post('/api/message', data)
      .then(res => {
        console.log(res.statusText)
        setIsRedirect(true)
        fetchMessages()
      })
      .catch(err => {
        console.log('Error sending text message', err)
      })
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(4n+1)': {
      backgroundColor: theme.palette.accent.main,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const rows = messages

  const Row = (props) => {
    const { row } = props
    const [open, setOpen] = useState(false)

    return (
      <React.Fragment>
        <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <StyledTableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{row.id}</StyledTableCell>
          <StyledTableCell >{row.text}</StyledTableCell>
          <StyledTableCell align="center">{row.customers[0].customerMessage.dateSent}</StyledTableCell>
          <StyledTableCell align="center">
            <Button
              variant="outlined"
              onClick={() => sendMessage(row)}
            >
              RESEND
            </Button>
          </StyledTableCell>
        </StyledTableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 5 }}>
                {/* <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography> */}
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
    <React.Fragment>
      <TableContainer component={Paper} sx={{ height: '70vh' }}>
        <Table stickyHeader size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell width='5%' />
              <StyledTableCell width='15%' align="center">Message Id</StyledTableCell>
              <StyledTableCell width='40%'>Message</StyledTableCell>
              <StyledTableCell width='20%' align="center">Date</StyledTableCell>
              <StyledTableCell width='20%' align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <Row key={row.id} row={row} />
              )
            })}
          </TableBody>
        </Table >
      </TableContainer >
      {isRedirect ? <Toast message={'Message Sent!'} isOpen={isRedirect} /> : null}
    </React.Fragment>
  )
}

export default MessageTable
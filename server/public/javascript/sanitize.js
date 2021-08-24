const sanitizeEmails = (customers) => {

  for (const customer of customers) {
    customer.email = customer.email.replace(/[&\/\\#,+()$~%'":*?<>{}\s]/g, '').replace('..', '')
  }

  // const emails = customers.map(customer => customer.email)
  // customers = customers.filter(({ email }, index) => !emails.includes(email, index + 1))

  // customers = [...new Map(customers.map(customer => [customer['email'], customer])).values()]

  return customers
}

module.exports = sanitizeEmails
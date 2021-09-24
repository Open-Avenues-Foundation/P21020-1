import React from "react";
import CustomerTable from "./components/CustomerTable";
import UploadCSVForm from "./components/UploadCSVForm";
import './css/main.css'

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Privy Table</h1>
      <UploadCSVForm />
      <CustomerTable />
    </div>
  );
}

export default App;

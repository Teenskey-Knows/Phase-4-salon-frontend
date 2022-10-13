import { Card } from "@mui/material";
import React from "react";
import "./Account.css";

function Account() {
  return (
    <div className="wrapper">
      <div className="account_card-wrapper items-flex justify-center">
        <Card
          title="Appointments Made"
          bordered
          className="account_card"
        ></Card>
        <Card title="Personal information" 
        bordered className="account_card">
            
        </Card>
      </div>
    </div>
  );
}

export default Account;

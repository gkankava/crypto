import React, { useState } from "react";
// import { dashboardProvider } from "../store/dashboard/dashboard";

import Exland from "../components/shared/exchange_panel/Exland";
import ConfirmationModal from "../components/shared/exchange_panel/ConfirmationModal";
// import { priceProvider } from "../store/currency/index";
// import { autoUpdateCurrency } from "../services/autoUpdateCurrency";

function Dashboard() {
  // const { dashboardData } = dashboardProvider();

  const [confirmData, setConfirmData] = useState(false);

  return (
    <div className="container">
      <div className="ex-inner-container">
        <Exland setConfirmData={setConfirmData} />
        {confirmData && (
          <ConfirmationModal data={confirmData} setData={setConfirmData} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;

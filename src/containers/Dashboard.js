import React, { useEffect, useState } from "react";
import { dashboardProvider } from "../store/dashboard/dashboard";

import Exland from "../components/shared/exchange_panel/Exland";
import { priceProvider } from "../store/currency/index";
import { autoUpdateCurrency } from "../services/autoUpdateCurrency";

function Dashboard() {
  const { dashboardData } = dashboardProvider();
  const { currentPrice, setCurrentPrice } = priceProvider();

  const [timeleft, setTimeleft] = useState(9);

  useEffect(() => {
    autoUpdateCurrency(setCurrentPrice, timeleft, setTimeleft);
  }, []);

  useEffect(() => {
    timeleft > 0 && setTimeout(() => setTimeleft(timeleft - 1), 1000);
    timeleft === 0 && setTimeout(() => setTimeleft(9), 1000);
  }, [timeleft]);

  return (
    <div className="container">
      <div className="ex-inner-container">
        <Exland timeleft={timeleft} />
      </div>
    </div>
  );
}

export default Dashboard;

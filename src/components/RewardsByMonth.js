import React from "react";
import TransactionsTable from "./TransactionsTable";

const RewardsByMonth = ({ month, transactions }) => {
  return (
    <div className="reward-container">
      <h2>{month}</h2>
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default RewardsByMonth;

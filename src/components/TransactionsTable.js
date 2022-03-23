import React from "react";
import TransactionsHeader from "./TransactionsHeader";
import { calculateRewards, getTotalRewards } from "../util/calculateRewards";
import TransactionRows from "./TransactionRows";

const TransactionsTable = ({ transactions }) => {
  const transactionsWithRewards = calculateRewards(transactions);
  const total = getTotalRewards(transactionsWithRewards);

  return (
    <>
      <table width={"100%"}>
        <TransactionsHeader />
        <TransactionRows transactions={transactionsWithRewards} />
      </table>
      <div className="total">
        Total Rewards: <strong>{total}</strong> Points
      </div>
    </>
  );
};

export default TransactionsTable;

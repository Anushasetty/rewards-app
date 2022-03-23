import React from "react";

const TransactionRows = ({ transactions }) => (
  <tbody>
    {transactions.map(({ amount, date, rewards }) => (
      <tr key={`${amount}-${date}`}>
        <td>{date}</td>
        <td>{amount}</td>
        <td>{rewards}</td>
      </tr>
    ))}
  </tbody>
);

export default TransactionRows;

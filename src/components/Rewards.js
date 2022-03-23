import React, { useState, useEffect } from "react";
import getTransactions from "../data/getTransactions";
import RewardsByMonth from "./RewardsByMonth";

const Rewards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      getTransactions().then((data) => {
        setData(data);
        setLoading(false);
      });
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="loader">
        <strong>Loading Transactions ...</strong>
      </div>
    );

  return (
    <>
      <h2 className="title">Rewards Calculator</h2>
      <div className="rewards-container">
        {Object.keys(data).map((key) => (
          <RewardsByMonth key={key} month={key} transactions={data[key]} />
        ))}
      </div>
    </>
  );
};

export default Rewards;

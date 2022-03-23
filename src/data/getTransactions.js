import mockTransactions from "./mockTransactions";

const getTransactions = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTransactions);
    }, 3000);
  });

export default getTransactions;

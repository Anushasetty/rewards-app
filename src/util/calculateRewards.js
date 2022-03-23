const calculateReward = ({ amount }) => {
  let reward = 0;
  if (amount >= 100) {
    reward = 50 + (amount - 100) * 2;
  } else if (amount > 50 && amount < 100) {
    reward = amount - 50;
  }

  return reward;
};

export const calculateRewards = (transactions) =>
  transactions.map((transaction) => ({
    ...transaction,
    rewards: calculateReward(transaction),
  }));

export const getTotalRewards = (transactions) =>
  transactions.reduce((acc, { rewards }) => acc + rewards, 0);

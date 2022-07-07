export const depositAmount = (amount) => {
  return {
    type: "DEPOSIT",
    payload: amount,
  };
};

export const withdrawAmount = (amount) => {
  return {
    type: "WITHDRAW",
    payload: amount,
  };
};
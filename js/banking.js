// Desposit Event Handler
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // latest Deposit
    const depositInput = document.getElementById("deposit-input");
    const currentDepositAmount = parseFloat(depositInput.value);

    // Previous Deposit
    const pastDeposit = document.getElementById("deposit-total");
    const pastDepositAmount = parseFloat(pastDeposit.innerText);

    // Total Deposit
    const totalDepositAmount = pastDepositAmount + currentDepositAmount;

    // Setting total Deposit with updated amount
    pastDeposit.innerText = totalDepositAmount;

    // Balance Calculation
    // Querying Previous Balance
    const previousBalance = document.getElementById("balance-total");
    const previousBalanceAmount = parseFloat(previousBalance.innerText);

    // Total Balance
    let totalBalanceAmount = previousBalanceAmount + currentDepositAmount;

    // Setting total balance with updated amount
    previousBalance.innerText = totalBalanceAmount;

    // Keeping the Deposit Amount Box Clean
    depositInput.value = "";
  });

// Withdraw Event Handler
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // WithDraw Amount
    const withdrawInput = document.getElementById("withdraw-input");
    const latestWithdrawAmount = parseFloat(withdrawInput.value);

    // Querrying the past Withdrawal
    const pastWithdraw = document.getElementById("withdraw-total");
    const pastWithdrawalAmount = parseFloat(pastWithdraw.innerText);

    // total Withdraw Amount
    const totalWithdrawalAmount = pastWithdrawalAmount + latestWithdrawAmount;

    // Setting total withdraw with updated amount
    pastWithdraw.innerText = totalWithdrawalAmount;

    // Keeping the Deposit Amount Box Clean
    withdrawInput.value = "";

    // previous Balance
    const remainingBalance = document.getElementById("balance-total");
    const remainingBalanceAmount = parseFloat(remainingBalance.innerText);

    // updated balance
    const updatedBalance = remainingBalanceAmount - latestWithdrawAmount;

    // Setting total balance with updated amount
    remainingBalance.innerText = updatedBalance;
  });

// codes before validation
/* function latestAmount(inputId) {
  const inputField = document.getElementById(inputId);
  const latestAmount = parseFloat(inputField.value);
  inputField.value = "";
  return latestAmount;
}

function totalAmount(inputId, latestAmount) {
  const querringPastAmount = document.getElementById(inputId);
  const pastAmount = parseFloat(querringPastAmount.innerText);
  const totalDeposit = latestAmount + pastAmount;
  querringPastAmount.innerText = totalDeposit;
  return totalDeposit;
}

function balanceAmount(latestAmount, isSubs) {
  const querryingBalance = document.getElementById("balance-total");
  const pastBalanceAmount = parseFloat(querryingBalance.innerText);
  if (isSubs == true) {
    querryingBalance.innerText = pastBalanceAmount - latestAmount;
  } else {
    querryingBalance.innerText = pastBalanceAmount + latestAmount;
  }
  querryingBalance.innerText = updatedBalanceAmount;
  return updatedBalanceAmount;
}

document.getElementById("btn-deposit").addEventListener("click", function () {
  const latestDepositAmount = latestAmount("new-deposit");
  totalAmount("total-deposit", latestDepositAmount);
  balanceAmount(latestDepositAmount, false);
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const latestWithdrawAmount = latestAmount("new-withdraw");
  totalAmount("total-withdraw", latestWithdrawAmount);
  balanceAmount(latestWithdrawAmount, true);
});
 */

// codes after validation
function latestAmount(inputId) {
  const inputField = document.getElementById(inputId);
  const latestAmount = parseFloat(inputField.value);
  inputField.value = "";
  return latestAmount;
}

function totalAmount(inputId, latestAmount) {
  const querringPastAmount = document.getElementById(inputId);
  const pastAmount = parseFloat(querringPastAmount.innerText);
  const totalDeposit = latestAmount + pastAmount;
  querringPastAmount.innerText = totalDeposit;
  return totalDeposit;
}

function balance() {
  const querryingBalance = document.getElementById("balance-total");
  const pastBalanceAmount = parseFloat(querryingBalance.innerText);
  return pastBalanceAmount;
}

function balanceAmount(latestAmount, isSubs) {
  const querryingBalance = document.getElementById("balance-total");
  const pastBalanceAmount = parseFloat(querryingBalance.innerText);
  if (isSubs == true) {
    querryingBalance.innerText = pastBalanceAmount - latestAmount;
  } else {
    querryingBalance.innerText = pastBalanceAmount + latestAmount;
  }
  querryingBalance.innerText = updatedBalanceAmount;
  return updatedBalanceAmount;
}

document.getElementById("btn-deposit").addEventListener("click", function () {
  const latestDepositAmount = latestAmount("new-deposit");
  if (latestDepositAmount > 0) {
    totalAmount("total-deposit", latestDepositAmount);
    balanceAmount(latestDepositAmount, false);
  } else {
    alert(`You can not deposit ${latestDepositAmount}! Enter a Positve Amount`);
  }
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const latestWithdrawAmount = latestAmount("new-withdraw");
  if (latestWithdrawAmount > 0 && balance() > latestWithdrawAmount) {
    totalAmount("total-withdraw", latestWithdrawAmount);
    balanceAmount(latestWithdrawAmount, true);
  } else {
    alert(
      `You can not withdraw ${latestWithdrawAmount}! Enter an amount that is less than or equals to your balance and not negative amount.`
    );
  }
});

const myAddress = "12dxx0082938";
const myBalance = "8";
const transfered = 0;
const addressess = [1, 2, 3, 4];
const amount = [1, 2, 3, 2];

function transfer(myAddress, addressess, amount) {
  if ((addressess.length = !amount.length)) {
    console.log("data not correct");
  } else if (Sum(amount) <= myBalance) {
    console.log("exceed total balance");
  } else {
    for (let i = 0; i < addressess.length; i++) {
      transfered = transfered + amount[i];
      if (transfered >= myBalance) {
        break;
      } else {
        RTCRtpSender(
          "from:myAddress , to:addressess[i], amountTransfer:amount[i]"
        );
        myBalance.getUpdate();
      }
    }
  }
}

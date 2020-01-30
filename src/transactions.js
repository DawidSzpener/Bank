var Transactions = (function() {

  var history = []

  function Transactions(){
  }

  Transactions.prototype.printTransactions = function() {
    console.log("date || credit || debit || balance");
    var index = history.length -1;
    for (index; index >= 0; index--) {
      console.log(history[index]);
    }
  };

  Transactions.prototype.saveDepositRecord = function(int, balance, date) {
    history.push(date + " || || " + int + " || " + balance);
    return history
  };

  Transactions.prototype.saveWithdrawRecord = function(int, balance, date) {
    history.push(date + " || " + int + " || || " + balance);
    return history
  };

  return Transactions;
})();

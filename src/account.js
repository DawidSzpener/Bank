var Account = function() {

  var transactions = transactions;
  var balance = balance;

  function Account(transactions = new Transactions, balance = new Balance){

    Account.prototype.display = function() {
      return transactions.printTransactions();
    };

    Account.prototype.withdraw = function(int) {
      if (balance.show() >= int) {
        balance.deductFromTheBalance(int);
        transactions.saveWithdrawRecord(int, balance.show(), Today());
        return "Your balance is " + balance.show();
      }
      return "Not enough funds, your balance is " + balance.show();
    };

    Account.prototype.deposit = function(int) {
      balance.addToTheBalance(int);
      transactions.saveDepositRecord(int, balance.show(), Today());
      return "Your balance is " + balance.show();
    };
  }

  return Account;
}();

(function(exports) {

  function Transactions(){
    this.balance = new Balance
    this.history = []
  }
  
  Transactions.prototype.add = function(int) {
    this.balance.ammount += int;
    this.history.push((new Today).date())
  }
  
  Transactions.prototype.deduct = function(int) {
    this.balance.ammount -= int;
  }

  Transactions.prototype.show = function() {
    return this.balance.show()
  }

  Transactions.prototype.showTransactions = function() {
    return this.history
  }

  exports.Transactions = Transactions;
})(this);
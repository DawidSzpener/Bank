(function(exports) {

  function Transactions(){
    this.balance = new Balance
    this.history = []
  }

  Transactions.prototype.add = function(int) {
    this.balance.ammount += int;
    this.history.push((new Today).date() + " || || " + int + " || " + this.balance.show())
  }

  Transactions.prototype.deduct = function(int) {
    this.balance.ammount -= int;
    this.history.push((new Today).date() + " || " + int + " || || " + this.balance.show())
  }

  Transactions.prototype.show = function() {
    return this.balance.show()
  }

  Transactions.prototype.showTransactions = function() {
    console.log("date || credit || debit || balance")
    for (index = this.history.length -1; index >= 0; index--) { 
      console.log(this.history[index]); 
    }
  }

  exports.Transactions = Transactions;
})(this);

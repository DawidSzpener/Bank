(function(exports) {

  function Transactions(balance){
    this.balance = balance
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
    arry = ['date || credit || debit || balance']
    for (index = this.history.length -1; index >= 0; index--) { 
      arry.push(this.history[index]); 
    }
    return(arry.join('\n'))
  }

  exports.Transactions = Transactions;
})(this);

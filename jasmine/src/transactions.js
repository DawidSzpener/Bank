(function(exports) {

  function Transactions(){
    this.balance = new Balance
  }
  
  Transactions.prototype.add = function(int) {
    this.balance.ammount += int;
  }
  
  Transactions.prototype.deduct = function(int) {
    this.balance.ammount -= int;
  }

  Transactions.prototype.show = function() {
    return this.balance.show()
  }

  exports.Transactions = Transactions;
})(this);
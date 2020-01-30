var Balance = function() {

    var balance = 0;

  function Balance(){
  }

  Balance.prototype.show = function() {
    return balance;
  };

  Balance.prototype.addToTheBalance = function(int) {
    balance += int;
    return balance
  };

  Balance.prototype.deductFromTheBalance = function(int) {
    balance -= int;
    return balance
  };

  return Balance;
}();

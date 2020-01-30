var Balance = function() {

    var _balance = 0;

  function Balance(){

    Balance.prototype.show = function() {
      return _balance;
    };

    Balance.prototype.addToTheBalance = function(int) {
      _balance += int;
      return _balance;
    };

    Balance.prototype.deductFromTheBalance = function(int) {
      _balance -= int;
      return _balance;
    };
  }

  return Balance;
}();

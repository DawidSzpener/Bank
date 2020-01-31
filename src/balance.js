var Balance = function() {


  function Balance(){
    
    this._balance = 0;

    Balance.prototype.show = function() {
      return this._balance;
    };

    Balance.prototype.addToTheBalance = function(int) {
      this._balance += int;
      return this._balance;
    };

    Balance.prototype.deductFromTheBalance = function(int) {
      this._balance -= int;
      return this._balance;
    };
  }

  return Balance;
}();

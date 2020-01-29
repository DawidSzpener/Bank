(function(exports) {

  function Balance(){
    this.ammount = 0;
  }
  
  Balance.prototype.show = function() {
    return this.ammount;
  };

  Balance.prototype.addToTheBalance = function(int) {
    this.ammount += int;
  };

  Balance.prototype.deductFromTheBalance = function(int) {
    this.ammount -= int;
  };

  exports.Balance = Balance;
})(this);

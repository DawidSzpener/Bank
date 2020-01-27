(function(exports) {


  function Balance(){
    this.ammount = 0
  }
  
  Balance.prototype.show = function() {
    return this.ammount;
  }

  exports.Balance = Balance;
})(this);

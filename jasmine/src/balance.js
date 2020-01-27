(function(exports) {

  var ammount = 0

  function Balance(){
  }
  
  Balance.prototype.show = function() {
    return ammount;
  }

  exports.Balance = Balance;
})(this);

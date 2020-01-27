(function(exports) {

  function balanceValidation(int1, int2) {
    if (int2 > int1) {
      return false
    }
  };

  exports.balanceValidation = balanceValidation;
})(this);

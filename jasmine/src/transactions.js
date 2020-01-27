(function(exports) {

  function add(int1, int2) {
    return int1+int2
  };

  function deduct(int1, int2) {
    return int1-int2
  };

  exports.add = add;
  exports.deduct = deduct;
})(this);
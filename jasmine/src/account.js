(function(exports) {
  var balance = new Balance

  function exclaim(string) {
    return string + "!".repeat(EXCLAMATION_MARK_COUNT);
  };

  exports.exclaim = exclaim;
})(this);
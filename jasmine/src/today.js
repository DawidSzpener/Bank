(function(exports) {

  function Today() {
  }

  Today.prototype.date = function() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date
  };

  exports.Today = Today;
})(this);

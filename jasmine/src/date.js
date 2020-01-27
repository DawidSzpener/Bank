(function(exports) {

  function date() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date
  };

  exports.date = date;
})(this);

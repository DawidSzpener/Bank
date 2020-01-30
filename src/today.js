var Today = function() {

  function Today() {
  
      var today = new Date();
      var date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
      return date;
  }
  
  return Today;
}();

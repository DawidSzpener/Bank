describe('Date', function() {
  it("Should return todays date", function() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    expect(today.date()).toEqual(date);
  });
});

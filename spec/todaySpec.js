describe('Date', function() {
  it("Should return todays date", function() {
    var now = new Today();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    expect(now.date()).toEqual("30/1/2020");
  });
});

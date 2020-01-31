describe("Transactions", function() {

  beforeEach(function() {

    transactions = new Transactions()

    jasmine.clock().install();
    var baseTime = new Date(2013, 9, 23);
    jasmine.clock().mockDate(baseTime);
    jasmine.clock().tick(50)
    expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  describe('showTransactions', function() {
    it("Should display the history of transactions", function() {
      spyOn(window.console, 'log')
      transactions.printTransactions()
      expect(window.console.log).toHaveBeenCalled();
    });
  });

  describe('saveDepositRecord', function() {
    it("Should save the record of depositing single time", function() {
      expect(transactions.saveDepositRecord(200, 0, new Date)[0]).toEqual('Wed Oct 23 2013 00:00:00 GMT+0100 (British Summer Time) || || 200 || 0')
    });
  });

  describe('saveWithdrawRecord', function() {
    it("Should save the record of withdrawing single time", function() {
      expect(transactions.saveWithdrawRecord(200, 0, new Date)[0]).toEqual('Wed Oct 23 2013 00:00:00 GMT+0100 (British Summer Time) || 200 || || 0')
    });
  });
});

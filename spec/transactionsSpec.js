describe("Transactions", function() {

  beforeEach(function() {

    transactions = new Transactions()

  })

  describe('showTransactions', function() {
    it("Should display the history of transactions", function() {
      spyOn(window.console, 'log')
      transactions.printTransactions()
      expect(window.console.log).toHaveBeenCalled();
    });
  });

  describe('saveDepositRecord', function() {
    it("Should save the record of depositing single time", function() {
      expect(transactions.saveDepositRecord(200, 0, "20-09-2020")[0]).toEqual('20-09-2020 || || 200 || 0')
    });
  });

  describe('saveWithdrawRecord', function() {
    it("Should save the record of withdrawing single time", function() {
      expect(transactions.saveWithdrawRecord(200, 0, "20-09-2020")[0]).toEqual('20-09-2020 || || 200 || 0')
    });
  });
});

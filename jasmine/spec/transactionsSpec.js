describe("Transactions", function() {

  describe('Deduct', function() {
    it("Should deduct amount from the account", function() {
      expect(deduct(500, 200)).toEqual(300);
    });
  });

  describe('Add', function() {
    it("Should add balance to the account by amount", function() {
      expect(add(500, 200)).toEqual(700);
    });
  });
});
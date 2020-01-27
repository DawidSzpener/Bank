describe("Validation", function() {

  describe('balanceValidation', function() {
    it("Should return false if there is not enough balance for withdrawal", function() {
      expect(balanceValidation(500, 700)).toEqual(false);
    });
  });
});
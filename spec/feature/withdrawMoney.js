balance = new Balance;
transactions = new Transactions;
account = new Account(transactions, balance);
account.deposit(5000);
account.withdraw(2000);
account.display();

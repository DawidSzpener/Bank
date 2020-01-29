balance = new Balance;
transactions = new Transactions(balance);
account = new Account(transactions);
account.deposit(5000);
account.withdraw(2000);
account.display();

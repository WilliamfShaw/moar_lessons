var Bank = function(name, address) {
	this.name = name;
	this.address = address;
	this.accounts = {
		checking: new Account(),
		savings: new Account()
	};
};

Bank.prototype.information = function() {
	return this.name + '\n' + this.address;
};

Bank.prototype.makeTransaction = function(transaction, account, amount) {
	var currentAccount = this.accounts[account];
	currentAccount[transaction](parseInt(amount));
	this.render();
};

Bank.prototype.render = function() {
	var checkingBalanceDisplay = $('#checking .balance h1');
	var savingsBalanceDisplay = $('#savings .balance h1');

	checkingBalanceDisplay.text(this.accounts.checking.balance);
	savingsBalanceDisplay.text(this.accounts.savings.balance);
};
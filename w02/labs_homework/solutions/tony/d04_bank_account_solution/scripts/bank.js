function Bank(name, address) {
	this.name = name;
	this.address = address;
	this.accounts = {};
}

Bank.prototype.information = function() {
	return this.name + '\n' + this.address;
}

Bank.prototype.openAccount = function(owner) {
	if (this.accounts.hasOwnProperty(owner)) {
		return 'Account already exists';
	} else {
		this.accounts[owner] = new Account(owner);
		return 'New account created for ' + owner;
	}
}

Bank.prototype.closeAccount = function(owner) {
	if (this.accounts.hasOwnProperty(owner)) {
		delete this.accounts[owner];
	}
}

Bank.prototype.makeTransaction = function(owner, transaction, amount) {
	if (this.accounts.hasOwnProperty(owner)) {
		var account = this.accounts[owner];
		account[transaction](amount);
		return account.information();
	} else {
		return 'That account does not exist!';
	}
}

Bank.prototype.getAccountInformation = function(owner) {
	if (this.accounts.hasOwnProperty(owner)) {
		return this.accounts[owner].information();
	}
}

Bank.prototype.listAccounts = function() {
	var allAccounts = [];
	for (var account in this.accounts) {
		allAccounts.push(this.accounts[account].information());
	}
	return allAccounts.join('\n');
}
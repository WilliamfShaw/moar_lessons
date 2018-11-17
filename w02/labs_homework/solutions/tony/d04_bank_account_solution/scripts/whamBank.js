console.log('***** Open a new bank *****');
var whamBank = new Bank('WHAM Bank', '21 East 21 Street NY, NY');
console.log(whamBank.information());

console.log('***** Open three new accounts *****');
console.log(whamBank.openAccount('McK'));
console.log(whamBank.openAccount('Hari'));
console.log(whamBank.openAccount('Harish'));

console.log('***** Listing Accounts *****');
console.log(whamBank.listAccounts());

console.log('***** Deposit money into all accounts *****');
console.log(whamBank.makeTransaction('McK', 'deposit', 9001));
console.log(whamBank.makeTransaction('Hari', 'deposit', 1000));
console.log(whamBank.makeTransaction('Harish', 'deposit', 2000));

console.log('***** Listing Accounts *****');
console.log(whamBank.listAccounts());

console.log('***** Get info for one account *****');
console.log(whamBank.getAccountInformation('McK'));

console.log('***** Attempt Overdraft *****');
whamBank.makeTransaction('McK', 'withdraw', 60000);

console.log('Tried to withdraw 60000', whamBank.getAccountInformation('McK'));

console.log('***** Attempt normal withdrawal *****');
whamBank.makeTransaction('McK', 'withdraw', 300);

console.log('Try to withdraw 300', whamBank.getAccountInformation('McK'));

console.log('***** Try to close Hari\'s account *****');
whamBank.closeAccount('Hari');

console.log('***** Listing Accounts *****');
console.log(whamBank.listAccounts());

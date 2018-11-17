$(function(){
	var whamBank = new Bank();

	$('button').on('click', function() {
		var amount = $(this).siblings().eq(0);
		var account = $(this).closest('.account').attr('id');
		var transactionType = $(this).attr('class');

		whamBank.makeTransaction(transactionType, account, amount.val());
		amount.val('');
	});
});
$(function() {
	console.log('Loaded, bro');
});

var items = [
	{
		description: 'Wash the car',
		completed: false
	},
	{
		description: 'Wrap things in ca$h',
		completed: false
	},
	{
		description: 'Write blog post about selfies',
		completed: false
	},
	{
		description: 'Do 20 jumping jacks',
		completed: true
	},
	{
		description: 'See the rain coming down on a sunny day',
		completed: true
	},
	{
		description: 'Learn about jQuery DOM manipulation',
		completed: true
	}
];

// Render All Items

var renderAllItems = function(itemsToRender) {
	var numItems = itemsToRender.length;

	for (var i = 0; i < numItems; i++) {
		var item = itemsToRender[i];
		renderSingleItem(item);
	}
};

// Render One Item

var renderSingleItem = function(item) {
	var newTodo = $('<li>').addClass('item');
	var description = $('<p>').text(item.description);
	var label = $('<span>').addClass('label');

	if (item.completed) {
		label.text('Remove');
		newTodo.append(description)
					 .append(label)
					 .addClass('done')
					 .appendTo($('#done-column .item-list'));
	} else {
		label.text('Mark as Done');
		newTodo.append(description)
					 .append(label)
					 .addClass('todo')
					 .appendTo($('#todo-column .item-list'));
	}
};

// Add New Item

var addNewItem = function() {
	var description = $('#new-item-text').val();

	var item = {
		description: description,
		completed: false
	};

	renderSingleItem(item);
	$('#new-item-text').val('');
};

// Remove Item

var removeItem = function(itemNumber) {
	var doneList = $('#done-column .item-list');
	var itemToRemove = doneList.children().eq(itemNumber);
	itemToRemove.remove();
};

// Mark as Done

var markAsDone = function(itemNumber) {
	var todoList = $('#todo-column .item-list');
	var doneList = $('#done-column .item-list');
	var itemToMove = todoList.children().eq(itemNumber);
	var newLabel = $('<span>').addClass('label').text('Remove');

	itemToMove.find('.label').replaceWith(newLabel);
	itemToMove.detach().appendTo(doneList);
};

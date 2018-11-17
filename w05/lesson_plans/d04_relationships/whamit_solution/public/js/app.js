$(function() {
  $('#wham-it').click(createChannel);
  $('#channels').on('click', '.toggle-comments', toggleComments);
  $('#channels').on('click', '.delete-channel', deleteChannel);
  $('#channels').on('click', '.create-comment', createComment);
  $('#channels').on('click', '.delete-comment', deleteComment);

  fetchAndRenderAll();
});

var fetchAndRenderAll = function() {
  $.ajax({
    url: '/channels',
    method: 'GET'
  }).done(function(channel) {
    channel.forEach(showChannel);
  });
};

var createChannel = function() {
  var channelName = $('#new-channel-name').val();
  if (channelName) {
    $.ajax({
      url: '/channels',
      method: 'POST',
      data: {
        name: channelName
      }
    }).done(showChannel)
  }
  $('#new-channel-name').val('');
};

var showChannel = function(channel) {
  var channelEl = $('<li class="channel">').data('id', channel.id);
  var channelCommentsEl = $('<div class="channel-comments">');

  channelCommentsEl
    .append('<input type="text" class="new-comment-content" placeholder="content">\
             <input type="text" class="new-comment-author" placeholder="author">\
             <button class="create-comment">Comment</button>');

  channelEl.append($('<span class="delete-channel">').text('X'));
  channelEl.append($('<span class="toggle-comments">').text('>'));
  channelEl.append($('<span class="channel-name">').text(channel.name));

  if (channel.comments) {
    channel.comments.forEach(function(comment) {
      $('<li class="comment">')
        .data('id', comment.id)
        .append($('<span class="delete-comment">').text('X'))
        .append($('<span class="content">').text(comment.content + ' - ' + comment.author))
        .appendTo(channelCommentsEl);
    });
  }
  channelCommentsEl.appendTo(channelEl);
  channelEl.appendTo('#channels');
};

var deleteChannel = function() {
  var channel = $(this).closest('.channel');
  $.ajax({
    url: '/channels/' + channel.data('id'),
    method: 'DELETE'
  }).done(function() {
    channel.remove();
  });
};

var toggleComments = function() {
  $(this).closest('.channel').find('.channel-comments').slideToggle();
  $(this).text() === '>' ? $(this).text('v') : $(this).text('>')
};

var createComment = function() {
  var channel = $(this).closest('.channel');
  var channelId = channel.data('id');
  var content = channel.find('.new-comment-content').val();
  var author = channel.find('.new-comment-author').val();

  $.ajax({
    url: '/channels/' + channelId + '/comments',
    method: 'POST',
    data: {
      content: content,
      author: author
    }
  }).done(function(comment) {
    $('<li class="comment">')
      .data('id', comment.id)
      .append($('<span class="delete-comment">').text('X'))
      .append($('<span class="content">').text(comment.content + ' - ' + comment.author))
      .appendTo(channel.find('.channel-comments'));

    channel.find('.new-comment-content').val('');
    channel.find('.new-comment-author').val('');
  });
};

var deleteComment = function() {
  var comment = $(this).closest('.comment');
  $.ajax({
    url: '/comments/' + comment.data('id'),
    method: 'DELETE'
  }).done(function() {
    comment.remove();
  });
};

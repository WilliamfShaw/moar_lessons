var postTemplate;

$(function() {
  console.log('Loaded, bro.');
  postTemplate = Handlebars.compile($('#post-template').html());
  fetchAndRenderPosts();

  $('#posts').on('click', '.remove-tag', removeTag);
  $('#posts').on('click', '.add-tag', addTag);
});

var fetchAndRenderPosts = function() {
  $.get('/posts').done(renderPosts);
};

var renderPosts = function(postsData) {
  $.get('/tags').done(function(tags) {
    $('#posts').empty();
    postsData.forEach(function(postData) {
      renderPost(postData, tags);
    });
  });
};

var renderPost = function(postData, tags) {
  $('#posts').append(
    postTemplate({
      post: postData,
      tags: tags
    })
  );
};

var removeTag = function() {
  var post = $(this).closest('.post');
  var tag = $(this).closest('.tag');

  var postId = post.data('id');
  var tagId = tag.data('id');

  $.ajax({
    url: '/posts/' + postId + '/remove_tag',
    method: 'PUT',
    data: {
      tag_id: tagId
    }
  }).done(fetchAndRenderPosts);
};

var addTag = function() {
  var post = $(this).closest('.post');
  var select = post.find('select');

  var postId = post.data('id');
  var tagId = select.val();

  $.ajax({
    url: '/posts/' + postId + '/add_tag',
    method: 'PUT',
    data: {
      tag_id: tagId
    }
  }).done(fetchAndRenderPosts);
};

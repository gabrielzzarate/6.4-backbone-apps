var $ = require('jQuery');
var Backbone = require('backbone');

var models = require('./models/blogform');
var views = require('./views/blogformview');

//var router = require('./router');


$(function(){
  //Backbone.history.start();

  var myPosts = new models.PostCollection();
  console.log(myPosts);
  var postForm = new views.BlogFormView({collection: myPosts});
  console.log(postForm);

  $('#app').html(postForm.render().el);
});

var posts = new models.PostCollection();
posts.fetch().done(function(){
  var blogForm = new views.BlogFormView( { collection: posts});
});

var $ = require('jquery');
var Backbone = require('backbone');

//local
var models = require('./models/blogform');
var views = require('./views/blogformview');

var Router = Backbone.Router.extend({
  routes: {
    "":                     "index",
  },

  initialize: function(){
    var myPosts = new models.PostCollection();
    var postForm = new views.BlogFormView({collection: myPosts});


    $('.container')
      .html(postForm.render().el);
      //.append(postList.render().el);
  }
});


module.exports = {'Router': Router};

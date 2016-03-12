
// 3rd Party
var $ = require('jquery');
var Backbone = require('backbone');

// Local
var sidebarviews = require('./views/postlistview');
var mainviews = require('./views/postview');
var postCollection = require('./models/post');


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'show'
  },

  



  initialize: function(){
    var posts = new postCollection.PostCollection();
    var postList= new sidebarviews.PostListView({collection: posts});
    //var postItem = new sidebarviews.PostItemView({collection: posts});
    var postView = new mainviews.PostMainView({collection:posts});

      posts.fetch().done(function(){
        $('#sidebar').html(postList.render().el);
        //.append(postItem.render().el);
      //  console.log(posts);


      });
      $('#main').html(postView.el);

      //$('#main').html(postView.render().el);
      //.html(postList.render().el)
      //.append(postItem.render().el);
  }
});

module.exports = new Router();

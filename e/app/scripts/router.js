// 3rd Party
var $ = require('jquery');

var Backbone = require('backbone');

// Local
//var IndexView = require('./views/index');

var PostView = require('./views/postview');
var PostListView = require('./views/postlist');

var PostCollection = require('./models/post').PostCollection;
var HomeView = require('./views/homeview');


var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'images/:id': 'show'
  },

  initialize: function(){

      var posts = new PostCollection();
      var homeview = new HomeView.HomeView({collection: posts});
      var postList= new PostListView.PostListView({collection: posts});
      //var postItem = new sidebarviews.PostItemView({collection: posts});
      var postView = new PostView.PostView({collection:posts});
    //  var formView = new FormView.BlogFormView({collection: posts});

        posts.fetch().done(function(){
          
          $('#sidebar').append(postList.render().el);


        });
        $('#app').html(homeview.render().el);
        $('#main').append(postView.el);



    }
  });

module.exports = new Router();

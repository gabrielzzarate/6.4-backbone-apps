//
// Blog Form Model and Collection
//
var $ = require('jQuery');
var Backbone = require('backbone');


var Post = Backbone.Model.extend({
    defaults: {
      title : '',
      author : ''
    },

    initialize: function() {
        console.log('a new post model has been created!');
        this.on('change', function(){
        console.log('- Values for this post have changed.');
      }
    );
  }
    });



var PostCollection = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/zoltanblog/'
});


module.exports = {
  'Post': Post,
  'PostCollection': PostCollection
};

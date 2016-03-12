//3rd party
var $ = require('jquery');
var Backbone = require('backbone');





var Post = Backbone.Model.extend({
  defaults: {
    display: false
  },
  initialize: function(){
    //console.log("model made");
  },



});

var PostCollection = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/zoltanblog/',

});



module.exports = {
  "Post": Post,
  "PostCollection": PostCollection
};

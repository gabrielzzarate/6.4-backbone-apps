//3rd party
var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');





var Post = Backbone.Model.extend({
  defaults: function() {
    return {
      url: '',
      caption: '',
      created_at: new Date(),
      display: false
    };
  },

//  idAttribute: '_id',

  // toJSON: function(){
  //   return _.extend({}, _.omit(this.attributes, '_id'), {id: this.id});
  // }
});








var PostCollection = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/paragraphblog/',

  // comparator: function(a, b) {
  //   return (new Date(b.get('created_at'))) - (new Date(a.get('created_at')));
  // }
});





module.exports = {
  "Post": Post,
  "PostCollection": PostCollection
};

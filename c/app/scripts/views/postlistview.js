var $ = require('jquery');
var Backbone = require("backbone");
var postListTemplate = require('../templates/postlist.hbs');
var postListItemTemplate = require('../templates/postlistitem.hbs');



// post list ul view
var PostListView = Backbone.View.extend({
  tagName: 'ul',
  template: postListTemplate,

  initialize: function () {
    // this.listenTo(this.collection, "add", this.render);
     this.listenTo(this.collection, "add", this.renderPostItem);
    },
  render: function(){
    //console.log(this.$el);
    //this.$el.html(this.template());
    return this;
  },
  renderPostItem: function(post){
    var view = new PostItemView({ model: post });
		this.$el.append(view.render().el);
  },
  

});

//post list li view
var PostItemView = Backbone.View.extend({

  events: {
    "click #title" : "changeDisplay"
  },
  tagName: 'li',
  class: "list-group-item",
  template: postListItemTemplate,

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);


  },



  render: function(){
    this.$el.html(this.template(this.model));
    return this;
  },

  changeDisplay: function(){
    this.model.set({display: true});
  }

});

module.exports = {
  'PostListView': PostListView,
  'PostItemView': PostItemView
};

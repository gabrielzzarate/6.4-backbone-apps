var $ = require('jquery');
var Backbone = require("backbone");
var modal = require('../modal');

//Local
var template = require('../templates/homeview.hbs');
var formtemplate = require('../templates/postform.hbs');
var PostCollection = require('../models/post').PostCollection;

var HomeView = Backbone.View.extend({

  template: template,

  events: {
    'click #write' : 'renderform'
  },

  renderform : function(){

    var posts = new PostCollection();
    var view = new BlogFormView({collection: posts});
    console.log(view);
		this.$el.append(view.render().el);

  },

  render: function(){
    //console.log(this.$el);
    this.$el.html(this.template());
    return this;

  }
});




var BlogFormView = Backbone.View.extend({
  template: formtemplate,
  events: {
    'click #submit-button' : 'formatPost',
  },

  initialize: function () {

    //this.listenTo(this.collection, "add", this.render);

    },
  render: function(){
    console.log('rendering...');
    this.$el.html(this.template());
    return this;

  },

  formatPost: function(event){

    console.log('formatting...');
    event.preventDefault();
    var postData = this.$el.find('form').serializeArray().reduce(function(acum, i) {
     acum[i.name] = i.value;
     return acum;
      }, {});
      console.log(postData);
      this.collection.create(postData);



  },


});


module.exports = {
  'HomeView': HomeView,
  'BlogFormView': BlogFormView
};

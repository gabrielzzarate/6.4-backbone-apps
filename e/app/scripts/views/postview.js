//3rd party
var $ = require('jquery');
var Backbone = require("backbone");

//Local
var postMainTemplate = require('../templates/postview.hbs');

var PostView = Backbone.View.extend({
  class: 'panel panel-info',
  template: postMainTemplate,

  initialize: function () {
     this.listenTo(this.collection, "change:display", this.render);
     //this.listenTo(this.collection, "reset", this.render);

    },


  render: function(model){
    if(!model.get("display")){
      return this;
    }
    model.set({display: false});
  

    this.$el.html( this.template(model.toJSON()) );
    //this.listenTo(this.collection, 'add', this.render);
    return this;
  },



});


module.exports = {
  'PostView': PostView
};

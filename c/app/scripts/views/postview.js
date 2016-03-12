//3rd party
var $ = require('jquery');
var Backbone = require("backbone");

//Local
var postMainTemplate = require('../templates/postview.hbs');

var PostMainView = Backbone.View.extend({
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
    console.log(model);
    console.log("rendering...");
    this.$el.html( this.template(model.toJSON()) );
    //this.listenTo(this.collection, 'add', this.render);
    return this;
  },



});


module.exports = {
  'PostMainView': PostMainView
};

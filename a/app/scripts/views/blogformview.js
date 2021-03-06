//
// Blog Form View
//

var Backbone = require("backbone");
var formTemplate = require('../templates/blogform.hbs');


var BlogFormView = Backbone.View.extend({
  tagName: 'form',
  class: 'form-horizontal',

  template: formTemplate,


  events: {
    "click #submit-button" : "formatPost",

  },

  initialize: function () {

     this.listenTo(this.collection, "add", this.render);

    },
  render: function(){

    this.$el.html(this.template());
    return this;
  },

  formatPost: function(event){
    console.log('formatting...');
    event.preventDefault();
    var postData = this.$el.serializeArray().reduce(function(acum, i) {
     acum[i.name] = i.value;
     return acum;
      }, {});
      console.log(postData);
      this.collection.fetch(postData);
  }


});

module.exports = {
  'BlogFormView': BlogFormView
};

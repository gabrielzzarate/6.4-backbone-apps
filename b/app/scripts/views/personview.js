var $ = require('jQuery');
var Backbone = require('backbone');


var personTemplate = require('../templates/personform.hbs');


var PersonFormView = Backbone.View.extend({
  tagName: 'form',
  class: 'form-horizontal',

  template: personTemplate,

  events: {
    "click #submit-button" : "formatForm"
  },

  initialize: function(){
    this.listenTo(this.collection, "add", this.render);
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  formatForm: function(){
    event.preventDefault();
    var formData = this.$el.serializeArray().reduce(function(acum, i) {
     acum[i.name] = i.value;
     return acum;
      }, {});
      console.log(formData);
      this.collection.create(formData);
  }



});

module.exports = {
  "PersonFormView": PersonFormView
};

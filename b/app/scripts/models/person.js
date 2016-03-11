var $ = require("backbone");
var Backbone = require("backbone");


var Person = Backbone.Model.extend({
  initialize: function(){
    console.log("model made");
  },



});

var PersonCollection = Backbone.Collection.extend({
  model: Person,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/users/'
});

module.exports = {
  "Person": Person,
  "PersonCollection": PersonCollection
};

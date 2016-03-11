var $ = require('jQuery');
var Backbone = require('backbone');

var models = require('./models/person');
var views = require('./views/personview');




$(function(){


  var newUsers = new models.PersonCollection();
  console.log(newUsers);
  var personForm = new views.PersonFormView({collection: newUsers});
  console.log(personForm);

  $('#app').html(personForm.render().el);
});

var newPeople = new models.PersonCollection();
newPeople.fetch().done(function(){
  var personForm = new views.PersonFormView( { collection: newPeople});
});

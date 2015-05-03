Session.setDefault('isCreating', false);

Template.body.helpers({
  editing: function () {
    return Session.get('editing');
  }
});

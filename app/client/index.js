Session.setDefault('isCreating', false);

Template.body.helpers({
  editing: function () {
    return Session.get('editing');
  }
});

Template.body.events({
  'click .header-title': function () {
    Session.set('navigationId', undefined);
  }
});


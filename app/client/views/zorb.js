Template.zorb.helpers({
  hasChildren: function () {
    return hasChildren(this._id);
  }
});

Template.zorb.events({
  'click .zorb-discuss': function () {
    Session.set('discussionId', this._id);
  },

  'click .zorb-edit': function () {
    Session.set('editing', this);
  },

  'click .zorb-navigate': function () {
    Session.set('navigationId', this._id);
  }
});

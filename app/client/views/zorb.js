Template.zorb.helpers({
  hasChildren: function () {
    return hasChildren(this._id);
  }
});

Template.zorb.events({
  'click .zorb-edit': function (event) {
    event.stopPropagation();
    Session.set('editing', this);
  },

  'click .zorb': function () {
    if (this.isTopic) {
      Session.set('navigationId', this._id);
    } else {
      Session.set('discussionId', this._id);
    }
  }
});

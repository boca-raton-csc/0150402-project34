Template.navigation.helpers({
  hasParent: function () {
    var parent = getNavigationParent();
    return parent ? true : parent === undefined;
  },

  navigationZorbs: function () {
    return getChildren(Session.get('navigationId'), {
      sort: {
        isSticky: -1,
        isTopic:  -1,
        modified: -1
      }
    });
  }
});

Template.navigation.events({
  'click .navigation-action-parent': function () {
    Session.set('navigationId', getNavigationParent());
  },

  'click .navigation-action-create': function () {
    Session.set('editing', true);
  }
});

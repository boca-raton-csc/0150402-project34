Session.setDefault('navigationId', undefined);
Session.setDefault('discussionId', undefined);

if (!Session.get('discussionId')) {
  Meteor.startup(function recursive() {
    var zorb = Zorbs.findOne();

    if (!zorb) {
      setTimeout(recursive, 100);
    } else {
      Session.set('discussionId', zorb._id);
    }
  });
}

getNavigationParent = function () {
  var navigation = Zorbs.findOne(Session.get('navigationId'));

  if (navigation) {
    return navigation.parent;
  }

  return null;
};

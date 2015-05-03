Session.setDefault('navigationId', undefined);
Session.setDefault('discussionId', undefined);

getNavigationParent = function () {
  var navigation = Zorbs.findOne(Session.get('navigationId'));

  if (navigation) {
    return navigation.parent;
  }

  return null;
};

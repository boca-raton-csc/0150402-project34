// TEMPORARY ANTI PATTERN!!!!!!!
// TODO: REMOVE!!
Session.setDefault('isNarwhals', true);

Template.body.helpers({
  isNarwhals: function () {
    return Session.get('isNarwhals');
  }
});
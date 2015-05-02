Template.navigation.helpers({
  topics: function () {
    return Topics.find();
  },
  
  discussions: function () {
    return Discussions.find();
  }
});
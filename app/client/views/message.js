function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function fixHours(i) {
  if (i > 12) {
    i -= 12;
  }
  return i;
}

Template.message.helpers({
  user: function () {
    return Meteor.users.findOne(this.user);
  },
  
  timestamp: function() {
    var time = this.createdAt;
    return fixHours(time.getHours()) + ':' + addZero(time.getMinutes());
  },
  
  likesCount: function () {
    return this.likes.length;
  },
  
  isUnliked: function () {
    return this.likes.length === 0;
  }
});

Template.message.events({
  'click .message-likes': function () {
    if (Meteor.user()) {
      var self       = this;
      var discussion = Zorbs.findOne(Session.get('discussionId'));
      
      var index = (function () {
        var index = -1;
        discussion.messages.forEach(function (message, newIndex) {
          if (message.text === self.text) {
            index = newIndex;
          }
        });
        return index;
      }());
      
      
      var query = {};
      
      query['messages.' + index + '.likes'] = Meteor.userId();
        
      if (this.likes.indexOf(Meteor.userId()) === -1) {
        Zorbs.update(Session.get('discussionId'), { $push: query });
      } else {
        Zorbs.update(Session.get('discussionId'), { $pull: query });
      }
    }
  }
});
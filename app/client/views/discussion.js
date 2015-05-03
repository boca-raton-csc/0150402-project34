Session.setDefault("kayla", true);

Template.discussion.helpers({
  messages: function() {
    scrollDiv();
    var discussion = Zorbs.findOne(Session.get('discussionId'));
    if (discussion) {
      return discussion.messages;
    }
    return [];
  },

  discussion: function () {
    return Zorbs.findOne(Session.get('discussionId'));
  },

  kayla: function() {
    return Session.get("kayla")
  }
});

Template.discussion.events({
   'submit .input': function(event) {
      event.preventDefault();

      var text = event.target.title.value;

      if(text.match(/^\s*$/)) {
        return;
      }

      Zorbs.update(Session.get('discussionId'), {
        $push: { messages: { text: text } }
      });

      event.target.title.value = '';
    },

    'click .discussion-toggle': function() {
      Session.set('kayla', !Session.get('kayla'));
    },

    'keydown .input-text': function (event) {
      if(event.keyCode == 13 && event.shiftKey) {
        event.preventDefault();
        $('.input').submit();
      }
    }
});


Meteor.startup(function () {
  scrollDiv();
});

var scrollDiv = function(){
  $('#messages').animate({scrollTop: $('#messages').prop('scrollHeight')}, 15);
};

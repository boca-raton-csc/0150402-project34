Session.setDefault("kayla", true);

Template.discussion.helpers({
  messages: function() {
    var discussion = Zorbs.findOne(Session.get('discussionId'));
    return discussion.messages;
  },
  
  featuredMessages: function () {
    var discussion = Zorbs.findOne(Session.get('discussionId'));
    var messages = discussion.messages.filter(function (message) {
      return message.likes.length >= 2;
    });
    return messages;
  },

  discussion: function () {
    return Zorbs.findOne(Session.get('discussionId'));
  },
  
  author: function () {
    var discussion = Zorbs.findOne(Session.get('discussionId'));
    return Meteor.users.findOne(discussion.author);
  },

  kayla: function() {
    return Session.get("kayla");
  }
});

Template.discussion.events({
 'submit .input': function(event) {
    event.preventDefault();
    
    if(Meteor.user()) {
      var $input = $('.input');
      $input.height(52);
      
      var text = event.target.title.value;
  
      if(text.match(/^\s*$/)) {
        return;
      }
  
      Zorbs.update(Session.get('discussionId'), {
        $push: {
          messages: {
            text:  text,
            user:  Meteor.userId(),
            likes: []
          }
        }
      });
  
      event.target.title.value = '';
      
      scrollDiv();
    }
  },

  'click .discussion-toggle': function() {
    Session.set('kayla', !Session.get('kayla'));
  },

  'keydown .input-text': function (event) {
    if(event.keyCode == 13 && event.shiftKey) {
      event.preventDefault();
      $('.input').submit();
    }
  },
  
  'keyup .input-text': function (event) {
    var scrollSize = event.target.scrollHeight;
    var $input     = $('.input');
    
    $input.height(Math.min(scrollSize, 52 * 5));
  }
});


Meteor.startup(function () {
  scrollDiv();
});

var scrollDiv = function(){
  $('#messages').animate({scrollTop: $('#messages').prop('scrollHeight')}, 15);
};
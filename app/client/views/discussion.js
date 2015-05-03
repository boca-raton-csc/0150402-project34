var messages = new ReactiveVar([]);
Session.setDefault("kayla", true);

Template.discussion.helpers({
  messages: function() {
    scrollDiv();
    return messages.get();
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

      var cache = messages.get();

      cache.push({
        title: text,
        createdAt: new Date()
      });

      messages.set(cache);

      event.target.title.value = '';
    },

    'click .discussion-toggle': function() {
      Session.set('kayla', !Session.get('kayla'));
    }
});


Meteor.startup(function () {
  scrollDiv();
  $(".input-text").on('keydown', function(e) {
    console.log(e)
    if(e.keyCode == 13 && e.shiftKey) {
      $('.input').submit();
    }
  });
});

var scrollDiv = function(){
  $('#messages').animate({scrollTop: $('#messages').prop('scrollHeight')}, 15);
};

Template.body.helpers({
   discussion: function() {
       return Discussions.find();
   } 
});

Template.body.events({
   'submit .post': function(event) {
      var title = event.target.title.value;
      
      Discussions.insert({
         title : title,
         createdAt: new Date()
      });
   }
});
Meteor.methods({
  resetData: function () {
    Meteor.users.remove({});
    Zorbs.remove({});
    
    // Meteor.users.insert({
    //   username: 'Admin'
    // }, function (err, userId) {
    //   if (err) { throw err; }  
    
    //   Zorbs.remove({});
  
    //   Zorbs.insert({
    //     title:   'Leonardo Da Vinci',
    //     isTopic: true,
    //     author:  userId
    //   }, function (err, id) {
    //     if (err) { throw err; }
  
    //     Zorbs.insert({
    //       title:  'Wow, look at this painting',
    //       parent: id,
    //       author: userId
    //     });
  
    //     Zorbs.insert({
    //       title:   'This is pretty legit guys',
    //       parent:  id,
    //       isTopic: true,
    //       author:  userId
    //     }, function (err, id) {
    //       if (err) { throw err; }
  
    //       Zorbs.insert({
    //         title:   'THE LEGITAMACY IS A LIE!!!!',
    //         parent:  id,
    //         isTopic: true,
    //         author:  userId
    //       }, function (err, id) {
    //         if (err) { throw err; }
  
    //         Zorbs.insert({
    //           title:   'THE ILLEGITAMACY IS A LIE!!!!!!!',
    //           parent:  id,
    //           isTopic: true,
    //           author:  userId
    //         }, function (err, id) {
    //           if (err) { throw err; }
  
    //           Zorbs.insert({
    //             title:  'the cake is a lie',
    //             parent: id,
    //             author: userId
    //           });
    //         });
    //       });
    //     });
    //   });
  
    //   Zorbs.insert({
    //     title:   'Salvador Dali',
    //     isTopic: true,
    //     author:  userId
    //   });
    // });
  }
});

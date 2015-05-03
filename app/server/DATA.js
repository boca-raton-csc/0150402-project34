Meteor.methods({
  resetData: function () {
    // Remove all topics
    Zorbs.remove({});

    Zorbs.insert({
      title:   'Leonardo Da Vinci',
      isTopic: true
    }, function (err, id) {
      if (err) { throw err; }

      Zorbs.insert({
        title:  'Wow, look at this painting',
        parent: id
      });

      Zorbs.insert({
        title:   'This is pretty legit guys',
        parent:  id,
        isTopic: true
      }, function (err, id) {
        if (err) { throw err; }

        Zorbs.insert({
          title:   'THE LEGITAMACY IS A LIE!!!!',
          parent:  id,
          isTopic: true
        }, function (err, id) {
          if (err) { throw err; }

          Zorbs.insert({
            title:   'THE ILLEGITAMACY IS A LIE!!!!!!!',
            parent:  id,
            isTopic: true
          }, function (err, id) {
            if (err) { throw err; }

            Zorbs.insert({
              title:  'the cake is a lie',
              parent: id
            });
          });
        });
      });
    });

    Zorbs.insert({
      title:   'Dali Salvador',
      isTopic: true
    });
  }
});

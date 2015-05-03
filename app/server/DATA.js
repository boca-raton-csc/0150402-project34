Meteor.methods({
  resetData: function () {
    /* ==============================
     * Topics
     * =========================== */

    Topics.remove({});

    Topics.insert({
      title: 'Leonardo Da Vinci'
    });

    /* ==============================
     * Topics
     * =========================== */

    Discussions.remove({});

    Discussions.insert({
      title:    'Lemon',
      messages: []
    });
  }
});

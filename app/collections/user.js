Schemas.User = new SimpleSchema({
  username: {
    type: String
  },

  services: {
    type: Object,
    optional: true,
    blackbox: true
  }
});

Meteor.users.attachSchema(Schemas.User);

Schemas.Message = new SimpleSchema({
  title: {
    type: String
  },

  text: {
    type: String
  },

  user: {
    type: String
  }
});

Schemas.Discussion = new SimpleSchema([Schemas.Zorb, {
  messages: {
    type: [Schemas.Messages]
  }
}]);

Discussions = new Mongo.Collection('discussions');
Discussions.attachSchema(Schemas.Discussion);

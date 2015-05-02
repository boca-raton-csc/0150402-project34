Schemas.Topic = new SimpleSchema([Schemas.Zorb, {
  
}]);

Topics = new Mongo.Collection('topics');
Topics.attachSchema(Schemas.Topic);
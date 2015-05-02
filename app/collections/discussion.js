Schemas.Discussion = new SimpleSchema([Schemas.Zorb, {
  
}]);

Discussions = new Mongo.Collection('discussions');
Discussions.attachSchema(Schemas.Discussion);
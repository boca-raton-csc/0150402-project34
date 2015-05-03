Schemas.Stimulus = new SimpleSchema({
  link: {
    label:    'Link (optional)',
    type:     String,
    optional: true
  },

  comment: {
    label:    'Comment',
    type:     String,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      }
    }
  }
});

Schemas.Message = new SimpleSchema({
  text: {
    type: String
  },

  user: {
    type:     String,
    optional: true
  },

  createdAt: {
    type:      Date,
    autoValue: function () {
      return new Date();
    }
  }
});

Schemas.Zorb = new SimpleSchema({
  title: {
    label: 'Title',
    type:  String
  },

  parent: {
    type:     String,
    optional: true
  },

  stimulus: {
    type:     Schemas.Stimulus,
    optional: true
  },

  messages: {
    type:         [Schemas.Message],
    defaultValue: []
  },

  isSticky: {
    label:        'Sticky discussion',
    type:         Boolean,
    defaultValue: false
  },

  isTopic: {
    label:        'Can have children',
    type:         Boolean,
    defaultValue: false
  },

  modified: {
    type:      Date,
    autoValue: function () {
      return new Date();
    }
  }
});

Zorbs = new Mongo.Collection('zorbs');
Zorbs.attachSchema(Schemas.Zorb);

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
    type: String
  },

  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  },
  
  likes: {
    type: [String]
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

  author: {
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
    label:        'Pin to top!',
    type:         Boolean,
    defaultValue: false
  },

  isTopic: {
    label:        'Make it a folder!',
    type:         Boolean,
    defaultValue: false
  },

  modified: {
    type:      Date,
    autoValue: function () {
      return new Date();
    }
  },
  
  createdBy: {
    type:     String,
    optional: true
  }
});

Zorbs = new Mongo.Collection('zorbs');
Zorbs.attachSchema(Schemas.Zorb);

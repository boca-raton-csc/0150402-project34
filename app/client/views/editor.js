var showStimulus = new ReactiveVar(true);

Template.editor.events({
  'click .editor-cancel': function (event) {
    Session.set('editing', undefined);
    event.target.form.reset();
  },
  
  'click .topic-toggle': function (event) {
    showStimulus.set(!$(event.target).is(':checked'));
  }
});

Template.editor.helpers({
  showStimulus: function () {
    return showStimulus.get();
  }
});

AutoForm.hooks({
  editorForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
      this.event.preventDefault();

      if (!Session.get('editing')) {
        this.done();
        return;
      }

      if (currentDoc._id) {
        Zorbs.update(currentDoc._id, updateDoc);
      } else {
        insertDoc.parent = Session.get('navigationId');
        insertDoc.author = Meteor.userId();
        Zorbs.insert(insertDoc);
      }

      Session.set('editing', undefined);
      this.done();
    }
  }
});
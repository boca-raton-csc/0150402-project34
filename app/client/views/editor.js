var addingStimulus = new ReactiveVar(false);

Template.editor.events({
  'click .stimulus-add': function () {
    addingStimulus.set(!addingStimulus.get());
  },

  'click .editor-cancel': function () {
    Session.set('editing', undefined);
  }
});

Template.editor.helpers({
  addingStimulus: function () {
    return addingStimulus.get();
  }
});

Tracker.autorun(function () {
  Session.get('navigationId');
  Session.set('editing', undefined);
});

Tracker.autorun(function () {
  Session.get('editing');
  addingStimulus.set(false);
});

AutoForm.hooks({
  editor: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
      this.event.preventDefault();

      if (!Session.get('editing')) {
        this.done();
        return;
      }

      if (currentDoc) {
        Zorbs.update(currentDoc._id, updateDoc);
      } else {
        insertDoc.parent = Session.get('navigationId');
        Zorbs.insert(insertDoc);
      }

      console.log(insertDoc);

      Session.set('editing', undefined);
      this.done();
    }
  }
});

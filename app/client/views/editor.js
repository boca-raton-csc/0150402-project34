Template.editor.events({
  'click .editor-cancel': function (event) {
    Session.set('editing', undefined);
    event.target.form.reset();
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
        Zorbs.insert(insertDoc);
      }

      Session.set('editing', undefined);
      this.done();
    }
  }
});

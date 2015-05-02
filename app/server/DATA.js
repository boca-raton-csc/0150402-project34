Meteor.methods({
  resetData: function () {
    /* ==============================
     * Topics
     * =========================== */
    
    // Remove all topics
    Topics.remove({});
    
    Topics.insert({
      title: "Leonardo Da Vinci"
    });
  }
});
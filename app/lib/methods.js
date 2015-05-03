getChildren = function (id, sort) {
  return Zorbs.find({ parent: id }, sort);
};

hasChildren = function (id) {
  return getChildren(id).count() !== 0;
};

function Model (data) {
  var self = this;
  self.data = data;

  self.addItem = function (item) {
    if(item.length === 0) {
      return;
    }
    self.data.push(item);
    return self.data;
  }

  self.removeItem = function (index) {
    if(isNaN(index)) {
      return;
    }
    self.data.splice(index, 1);
    return self.data;
  }

  self.editItem = function (text, index) {
    if(isNaN(index) || text.length === 0) {
      return;
    }
    self.data[index] = text;
    return self.data;
  }
}
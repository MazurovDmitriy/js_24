function Controller (model, view) {
  var self = this;
  view.elements.addBtn.on('click', addItem);

  function showHideTools() {
    $(this).next().slideToggle(300);
  }

  self.initControls = function () {
    $('.'+view.elements.saveBtnClass).on('click', saveItem);
    $('.'+view.elements.editBtnClass).on('click', showHideTools);
    $('.'+view.elements.delBtnClass).on('click', removeItem);
  }

  function saveItem(event) {
    var index = $(this).attr('data-index');
    var newValue = $('#val_' + index).val();
    if(newValue.length === 0 && !isNaN(index)) {
      model.removeItem(index);
    }
    else if(newValue.length > 0 && !isNaN(index)) {
      model.editItem(newValue, index);
    }
    view.renderList(model.data);
    self.initControls();
  }

  function removeItem() {
    var index = $(this).attr('data-index');
    if(isNaN(index)) {
      return;
    }
    model.removeItem(index);
    view.renderList(model.data);
    console.log('self', self);
    self.initControls();
  }

  function addItem() {
    var newItem = view.elements.input.val();
    model.addItem(newItem);
    view.renderList(model.data);
    self.initControls();
    view.elements.input.val('');
  }

  self.initControls();
}
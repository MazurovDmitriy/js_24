function Controller (model, view) {
  var self = this;
  view.elements.addBtn.on('click', addItem);
  $('.'+view.elements.saveBtnClass).on('click', saveItem);
  $('.'+view.elements.editBtnClass).on('click', showHideTools);

  function showHideTools() {
    $(this).next().slideToggle(300);
  }

  function saveItem(event) {
    //console.log();
    var index = $(this).attr('data-index');
    var newValue = $('#val_' + index).val();
    if(newValue.length === 0 && !isNaN(index)) {
      model.removeItem(index);
    }
    else if(newValue.length > 0 && !isNaN(index)) {
      model.editItem(newValue, index);
    }
    view.renderList(model.data);
    $('.'+view.elements.saveBtnClass).on('click', saveItem);
    $('.'+view.elements.editBtnClass).on('click', showHideTools);
  }

  function addItem() {
    var newItem = view.elements.input.val();
    model.addItem(newItem);
    view.renderList(model.data);
    $('.'+view.elements.saveBtnClass).on('click', saveItem);
    $('.'+view.elements.editBtnClass).on('click', showHideTools);
    view.elements.input.val('');
  }
}
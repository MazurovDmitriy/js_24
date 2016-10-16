function View(model) {
  var self = this;
  
  function init() {
    self.elements = {
      input: $('.todo__input'),
      addBtn: $('.todo__btn'),
      saveBtnClass: 'todo__save-btn',
      editBtnClass: 'todo__edit-btn',
      delBtnClass: 'todo__del-btn',
      listContainer: $('.todo__list'),
      listTemplate: $('#todo_template')
    };
    self.renderList(model.data);
  }

  self.renderList = function (data) {
    var list = tmpl('todo_template', {data: data});
    self.elements.listContainer.html(list);
  }

  init();
}
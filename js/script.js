
$( function() {

  var todoArray = ['Закончить Английский', 'Сделать урок JS №24'];
  var model = new Model(todoArray);
  var view = new View(model);
  var controller = new Controller(model, view);
  
});
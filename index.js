var Button = $('.submit-btn');
var cardContainer = $('.card-container');

Button.on("click", appendToDo);

function appendToDo() {
  var toDo = $('.to-do').val();

  cardContainer.append(`
    <p>${toDo}</p>
    <button>Done</button>
  `);
}
function removeToDo() {
  .removeToDo

}

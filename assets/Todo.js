var todos = [
  {
    id: 1,
    todo: "yapılacak iş",
    detail: "yapılacak işin detayı",
    dueDate: "2023-08-11T00:00",
    isCompleted: true,
  },
  {
    id: 2,
    todo: "yapılacak 2. iş",
    detail: "yapılacak 2. işin detayı",
    dueDate: "2022-08-12T00:00",
    isCompleted: false,
  },
  {
    id: 3,
    todo: "yapılacak 3. iş",
    detail: "yapılacak 3. işin detayı",
    dueDate: "2021-08-13T00:00",
    isCompleted: true,
  },
];

var activeTodo = {};
var activeTodoId;
var todoDetailTitle = $(".todoDetailTitle");
var todoDetailDesc = $(".todoDetailDesc");
var todoDetailDueDate = $(".todoDetailDueDate");
function ShowTodoss(id, todo, isCompleted) {
  return `
  <li class="todoItem list-group-item" data-id=${id}>
            <input class="todoCheck form-check-input me-1" type="checkbox" value="" ${
              isCompleted ? "checked" : ""
            } id="firstCheckbox" style="margin-top: 9px"/>
            <label class="form-check-label col-md-9 todoDetailTitle" for="firstCheckbox" value="${todo}"> ${todo} </label>
            <div class="btn-group col-md-2" style="margin-left: 25px" role="group" aria-label="Basic example">
            <button data-id=${id} type="button" class="todoActionsButtons showTodoDetail btn btn-primary"> Detay </button>
            <button data-id=${id} type="button" class="btn btn-danger todoActionsButtons"> Sil </button></div></li>`;
}
// <div class="todoItem input-group mb-3">
//     <div class="input-group-text" data-id=${id}>
//       <input class="todoCheck form-check-input mt-0" type="checkbox" ${(isCompleted ? 'checked' : '')} value="True">
//     </div>
//     <input type="text" readonly class="form-control" value="${todo}">
//     <button data-id=${id} class="btn btn-outline-info todoActionButtons showTodoDetail" type="button">Detay</button>
//     <button data-id=${id} class="btn btn-outline-danger todoActionButtons" type="button">Sil</button>
//     </div>`

for (var item of todos) {
  $(".todoListList").append(ShowTodoss(item.id, item.todo, item.isCompleted));
}

function selectByIdTodo(id) {
  for (var item of todos) {
    if (item.id === id) {
      return item;
    }
  }
  return {};
}

function UpdateTodoDetailPanel() {
  var todo = selectByIdTodo(activeTodoId);

  todoDetailDesc.val(todo.detail);
  todoDetailTitle.text(todo.todo);
  todoDetailDueDate.val(todo.dueDate);
}

$(".showTodoDetail").click(function () {
  $(".showTodoDetail").show().siblings(".todoActionsButtons").show();
  activeTodo = $(this);
  activeTodoId = activeTodo.data("id");

  UpdateTodoDetailPanel();

  $(this).hide().siblings(".todoActionsButtons").hide();
  $(".todoList").removeClass("col-md-12").addClass("col-md-6");
  $(".todoListPanel").show();
});
$(".closeTodoPanel").click(function () {
  $(".todoListPanel").hide();
  $(".todoList").removeClass("col-md-6").addClass("col-md-12");
  activeTodo.show().siblings(".todoActionsButtons").show();
});

// -----------------------------------------------------------------------------------
var secme = $('input[name="TodoListeSecimi"]');

secme.click(function () {
  $(".todoList")
    .removeClass("inputTodoAll  inputTodoActive inputTodoDone")
    .addClass($(this).val());
});

import { memo } from "react";
import { ITodo, STATUS } from "../pages/todo";
import Button from "./Button";
import { useTodoContext } from "../contexts/TodoContext";

type TodoListProps = {
  todoList: ITodo[];
  onEdit: (index: number) => void;
  onRemove: (index: number) => void;
};
function TodoList() {
  const { todoList, handleEditAddTodo, handleRemoveAddTodo, handleComplete } = useTodoContext();
  console.log('rendering=>TodoList()');
  return (
    <div className="flex flex-col items-center mt-5">
      {todoList?.map((todo, index) => (
        <div className="flex content-between" key={index}>
          <span
            className={`text-${
              todo.status === 1 ? "green" : todo.status === 2 ? "amber" : "red"
            }-700	 text-xl`}
          >
            {todo.value}
          </span>
          <div className="flex mx-10  content-between ">
            <Button
              onClick={() => handleEditAddTodo(todo.id)}
              className="bg-green-300 "
            >
              Edit
            </Button>
            <Button
              onClick={() => handleRemoveAddTodo(todo.id)}
              className="bg-red-300 "
            >
              Remove
            </Button>
            <Button
              onClick={() => handleComplete(todo.id)}
              className="bg-orange-300 "
            >
              Complete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(TodoList);

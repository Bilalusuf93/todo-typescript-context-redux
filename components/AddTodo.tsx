import { useState } from "react";
import { ITodo, STATUS } from "../pages/todo";
import InputControl from "./InputControl";
import Button from "./Button";
import { useTodoContext } from "../contexts/TodoContext";

// type AddTodoProps = {
//     onAdd: (item: ITodo) => void;
//     setTodoValue: (value: React.SetStateAction<ITodo>) => void
//     value?: ITodo;
// }
function AddTodo() {
    const { handleAddTodo, handleOnChange, todoValue } = useTodoContext();
    console.log('rendering=>AddTodo()');
    return (
        <div className="flex justify-center items-center">
            <InputControl
                type="text"
                value={todoValue?.value ?? ''}
                className="bg-red-400"
                placeholder="Todo here..."
                onChange={(e) => handleOnChange({ value: e.target.value, id: todoValue?.id ?? null, status: STATUS.PENDING })} />

            <Button className="text-white h-4 bg-gray-600 p-5"
                onClick={() => {
                    handleAddTodo({ value: todoValue?.value, id: todoValue?.id, status: STATUS.PENDING });
                }}>Add Todo</Button>
        </div>
    )
}

export default AddTodo
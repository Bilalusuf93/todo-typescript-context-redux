import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import { ITodo, STATUS } from "../pages/todo";

type TodoContextType = {
    todoList: ITodo[];
    todoValue: ITodo;
    handleAddTodo: (item: ITodo) => void;
    handleOnChange: (item: ITodo) => void;
    handleRemoveAddTodo: (index: number) => void;
    handleEditAddTodo: (index: number) => void;
    handleComplete: (index: number) => void;
};

const todoContextDefault: TodoContextType = {
    todoList: null,
    todoValue: null,
    handleAddTodo: () => { },
    handleOnChange: () => { },
    handleRemoveAddTodo: () => { },
    handleEditAddTodo: () => { },
    handleComplete: () => { },
};

const TodoContext = createContext<TodoContextType>(todoContextDefault);

export function useTodoContext() {
    return useContext(TodoContext);
}

type Props = {
    children: ReactNode;
};

export function TodoProvider({ children }: Props) {
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [todoValue, setTodoValue] = useState<ITodo>(null);


    const handleAddTodo = (item: ITodo) => {
        if (!item.value) {
            return;
        }
        if (item.id) {
            let udpated = [...todoList];
            const index = todoList.findIndex((x) => x.id === item.id);
            udpated[index] = item;
            setTodoList(udpated);
            return;
        }
        setTodoList([
            ...todoList,
            { value: item.value, id: todoList.length + 1, status: STATUS.PENDING },
        ]);
        setTodoValue(null);
    };
    const handleRemoveAddTodo = useCallback(
        (id: number) => {
            const filterTodo = todoList?.filter((_, i) => _.id !== id);
            setTodoList(filterTodo);
        },
        [todoList]
    );
    const handleEditAddTodo = (
        (id: number) => {
            const findIndex = todoList.findIndex((x) => x.id === id);
            setTodoValue(todoList[findIndex]);
        });
    const handleOnChange = (todo: ITodo) => {
        if (!todo.value) {
            return;
        }
        setTodoValue(todo);
    }

    const handleComplete = (id: number) => {
        const findIndex = todoList.findIndex((x) => x.id === id);
        setTodoList(prev => {
            const newTodo = [...prev];
            newTodo[findIndex] = {...prev[findIndex], status: STATUS.DONE}
            return newTodo;
        });
    }
    // const memoizedList = useMemo(() => todoList, [todoList])
    return (
        <TodoContext.Provider
            value={{
                todoList,
                todoValue,
                handleComplete,
                handleOnChange,
                handleAddTodo,
                handleEditAddTodo,
                handleRemoveAddTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

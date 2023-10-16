import { useCallback, useMemo, useState } from "react"
import AddTodo from "../../components/AddTodo"
import Layout from "../../components/Layout"
import TodoList from "../../components/TodoList"
import { TodoProvider } from "../../contexts/TodoContext"

export enum STATUS {
    DONE = 1,
    PENDING = 2,
    REMOVED = 3
}
export type ITodo = {
    value: string;
    id?: number;
    status?: STATUS
}

const TodoPage = () => {


    return (
        <Layout title="Todo List">
            <div className="flex flex-col justify-center items-center m-5">
                <TodoProvider>
                    <AddTodo />
                    <TodoList />
                </TodoProvider>

            </div>


        </Layout>
    )
}

export default TodoPage;
import useGetTodo from "./useGetTodo";
import {useNavigate} from "react-router-dom";

import {deleteTodo, putTodo} from "../apis/todoApi";


const useModifyTodo = (id) => {

    const [todo, setTodo] = useGetTodo(id)

    const navigate = useNavigate()

    const handleChange = (e) => {

        todo[e.target.name] = e.target.value

        setTodo({...todo})
    }

    const clickModify = () => {

        putTodo(todo).then(() => navigate(`/todo/read/${todo.id}`) )
    }

    const clickDelete = () => {

        deleteTodo(todo.id).then(() => navigate(`/todo/list`) )

    }

    return {todo,handleChange,clickModify, clickDelete}
}

export default useModifyTodo
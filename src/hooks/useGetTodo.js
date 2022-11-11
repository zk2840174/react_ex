import {useEffect, useState} from "react";
import {getTodo} from "../apis/todoApi";

const initState = {
    id:0,
    title:'',
    writer:''
}


const useGetTodo = (id) => {

    const [todo, setTodo] = useState(initState)

    useEffect(() => {

        getTodo(id).then(result => setTodo(result))

    },[id])

    return [todo]
}

export default useGetTodo
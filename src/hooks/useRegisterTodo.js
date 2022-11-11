import {useState} from "react";
import {postTodo} from "../apis/todoApi";


const initState = {
    title:'',
    writer: ''
}


const useRegisterTodo = () => {

    const [todo, setTodo] = useState({...initState}) //상태 추가

    const handleChange = (e) => {
        todo[e.target.name] = e.target.value
        console.log("todo: ", todo)
        setTodo({...todo})
    }

    const handleReset =  () =>  {
        setTodo({...initState})
    }

    const clickRegister = () => {
        postTodo(todo).then(result => {
            console.log("SEND POST RESULT " , result)
        })
    }

    return {todo,clickRegister,handleChange,handleReset}
}

export default  useRegisterTodo
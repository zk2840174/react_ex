import axios from "axios";


export const postTodo = async (todo) =>  {

    const res = await axios.post(`http://localhost/todos/`, todo)

    return res.data
}
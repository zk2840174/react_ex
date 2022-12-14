import {
    createBrowserRouter, Navigate

} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import TodoListPage from "./pages/todo/TodoListPage";
import TodoRegisterPage from "./pages/todo/TodoRegisterPage";
import TodoReadPage from "./pages/todo/TodoReadPage";
import TodoModifyPage from "./pages/todo/TodoModifyPage";


const routers = createBrowserRouter([
    {
        path: "",
        element: <MainPage></MainPage>
    },
    {
        path: "about",
        element: <AboutPage></AboutPage>
    },
    {
        path: "todo",
        children: [
            {path: "list", element: <TodoListPage></TodoListPage>},
            {path: "register", element: <TodoRegisterPage></TodoRegisterPage>},
            {path: "read/:id", element: <TodoReadPage></TodoReadPage>},
            {path: "modify/:id", element: <TodoModifyPage></TodoModifyPage>},
            {path: "", element:<Navigate to={"/todo/list"} replace={true} ></Navigate>}
        ]
    }
])

export default routers
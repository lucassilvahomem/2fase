import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Alterarprodutos from "../pages/Alterarprodutos";
import Cadastroproduto from "../pages/Cadastroproduto";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/Alterarproduto", element: <Alterarprodutos />},
    {path: "/Cadastroproduto", element: <Cadastroproduto />},
])

export default router;

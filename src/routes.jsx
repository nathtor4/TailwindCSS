import PaginaBase from "./pages/PaginaBase/PaginaBase"
import CadastroCliente from "./pages/CadastroCliente/CadastroCliente";
import PesquisaCliente from "./pages/PesquisaCliente/PesquisaCliente";
import EditarCliente from "./pages/EditarCliente/EditarCliente";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada/PaginaNaoEncontrada";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";


function AppRoutes() {
    return (
        <BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route path="clientes" element={<CadastroCliente />} />
                    <Route path="clientes/pesquisa" element={<PesquisaCliente />} />
                    <Route path="clientes/:id" element={<EditarCliente />} />
                </Route>
                <Route path="*" element={<PaginaNaoEncontrada />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
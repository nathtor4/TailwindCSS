import { Outlet } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho/Cabecalho";
import MenuLateral from "../../componentes/MenuLateral/MenuLateral";
import Rodape from "../../componentes/Rodape/Rodape";

export default function PaginaBase() {
    return(
        <>
            <div className="flex h-screen">
                <MenuLateral />
                <div className="flex-1">
                    <Cabecalho />
                    <Outlet />
                </div>
            </div>
            <Rodape />
        </>
    )
}
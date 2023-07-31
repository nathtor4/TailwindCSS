import { Link } from "react-router-dom";

export default function NavClientes() {
    return(
        <div className="flex justify-between py-3 px-7 items-center border-b text-padrao-azul">
            <h3 className="text-3xl font-medium">Clientes</h3>
            <div className="">
                <Link className="padrao-abas" to="/clientes">
                    Cadastro
                </Link>
                <Link className="padrao-abas" to="/clientes/pesquisa">
                    Pesquisa
                </Link>
            </div>  
        </div>
    )
}
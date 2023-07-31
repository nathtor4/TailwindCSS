import logo from './logo_smed2.png';
import linksMenuLateral from "../../json/linksMenuLateral.json";
import { Link } from 'react-router-dom';

export default function MenuLateral () {
    return(
        <div className="bg-padrao-azul text-padrao-contraste w-1/4">
            <div className="border-b">
                <img className="py-1 px-4 max-h-20 max-w-30" src={logo} alt="logo"></img>
            </div>
            <div className="px-4 py-2">
                <h1 className="px-4 py-2  sm:text-xl lg:text-3xl">Menu</h1>
                <hr className="border-t-1"/>
            </div>
            <div className="p-2">
                {linksMenuLateral.map((link) => (
                    <div key={link.id}>
                        <Link to={link.url} className='padrao-opcoes-menu'>
                            <svg className="px-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox={link.viewBox}>
                                <path d={link.caminhoIcones}/>
                            </svg>
                            {link.nomeLink}
                        </Link>
                    </div>
                    ))
                }
            </div>
        </div>     

    )
}
import { useEffect, useState } from "react";

export default function Rodape() {

    const [dataHora, setDataHora] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDataHora(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    
    return(
        <footer className="flex justify-between px-3 border-t">
            <p>Usuário logado: </p>
            <p>{dataHora.toLocaleString()}</p>
        </footer>
    )
}
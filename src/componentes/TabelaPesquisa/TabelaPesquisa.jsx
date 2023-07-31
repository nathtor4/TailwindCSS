export default function TabelaPesquisa({ camposPesquisados }) {
    return (
        <div className="border-t container mx-auto overflow-x-auto overflow-y-auto h-1/2 max-h-80 min-h-min ">
            <table className="table-auto border-collapse border w-full relative">
                <thead className="text-padrao-azul">
                    <tr className="border-b sticky top-0 bg-white">
                        <th colSpan={6} className="py-1 my-1 text-center text-lg ">
                            Lista de Clientes
                        </th>
                    </tr>
                    <tr className="border-b">
                        <th scope="border px-4 py-2">Nome</th>
                        <th scope="border px-4 py-2">CPF</th>
                        <th scope="border px-4 py-2">Telefone</th>
                        <th scope="border px-4 py-2">E-mail</th>
                        <th scope="border px-4 py-2">Excluir</th>
                        <th scope="border px-4 py-2">Editar</th>
                    </tr>
                </thead>
            <tbody className="border-t">{camposPesquisados}</tbody>
            </table>
        </div>
    );
}
  
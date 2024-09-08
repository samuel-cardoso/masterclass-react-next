import Cabecalho from "./Cabecalho";
import MenuPrincipal from "./MenuPrincipal";

export default function Pagina(props: any) {
    return (
        <div className="flex flex-col h-screen">
            <Cabecalho />
            <div className="flex flex-grow">
                <MenuPrincipal />
                <main className="p-7">
                    {props.children}
                </main>
            </div>

        </div>
    )
}
import Logo from "./Logo";
import MenuUsuario from "./MenuUsuario";

export default function Cabecalho() {
    return (
        <header className="items-center gap-5 px-5 bg-zinc-800 h-20 text-white flex">
            <Logo />
            <span className="flex-grow text-center">Cabeçalho</span>
            <MenuUsuario />
        </header>
    )
}
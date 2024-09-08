import { IconApps, IconHexagon1, IconLayout2, IconListCheck } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function MenuPrincipal() {
    return (
        <aside className="w-80 bg-zinc-900">
            <nav className='flex flex-col text-white p-5'>
                <MenuItem text={"Primeiro Componente"} link="/primeiro" >
                    <IconHexagon1 />
                    <span>Primeiro Componente</span>
                </MenuItem>
                <MenuItem text="Flexbox" link="/flexbox">
                    <IconLayout2 />
                    <span>FlexBox</span>
                </MenuItem>
                <MenuItem text="Componente Página" link="/pagina">
                    <IconApps />
                    <span>Componente Página</span>
                </MenuItem>
                <MenuItem text="Estado" link="/estado">
                    <IconListCheck />
                    <span>Componente Estado</span>
                </MenuItem>
            </nav>
        </aside >
    )
}
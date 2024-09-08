import { IconHeartFilled } from "@tabler/icons-react"

export default function Rodape() {
    return (
        <footer>
            <div className="flex text-white justify-end bg-zinc-700 p-4 text-sm">
                <span>Desenvolvido com</span>
                <IconHeartFilled size={20} stroke={1} className="text-red-500 mx-2" />
                <span>por <strong>Samuel</strong> - {new Date().getFullYear()}
                </span>

            </div>
        </footer>
    )
}
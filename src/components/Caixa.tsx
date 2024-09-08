interface CaixaProps {
    texto: string;
    className: string;
}

export default function Caixa(props: CaixaProps) {
    return (
        <div className={`text-white flex justify-center items-center bg-red-500 p-3 border-2 border-zinc-500 rounded 
        ${props.className ?? ''}
        `}>
            {props.texto}
        </div>
    )
}
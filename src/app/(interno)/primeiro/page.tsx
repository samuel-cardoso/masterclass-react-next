import Pagina from "@/components/template/Pagina"

export default function Primeiro() {
    const raio = 4.5
    const PI = 3.14159

    const titulo = (
        <div>
            <h1>
                Primeiro Componente
            </h1>
            <h2>
                Assuntos importantes para o primeiro componente
            </h2>
        </div>
    )

    function anoAtual() {
        return new Date().getFullYear()
    }

    function gerarUmaLista() {
        return (

            <ul className="pl-10 list-disc">
                <li>
                    João
                </li>
                <li>
                    Maria
                </li>
                <li>
                    José
                </li>
            </ul>
        )
    }

    return <div className="text-white">
        {titulo}
        <div className="flex flex-col">
            <span>{1 + 1}</span>
            <span>{Math.random()}</span>
            <span>{anoAtual()}</span>
        </div>
        <span>{gerarUmaLista()}</span>
        <div>
            <span>
                {PI * Math.pow(raio, 2)}
            </span>
        </div>
    </div>
}
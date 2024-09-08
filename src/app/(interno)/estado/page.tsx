'use client'

import { IconSend, IconTrash } from "@tabler/icons-react"
import { useState } from "react"

export default function Page() {

    const [tarefas, setTarefas] = useState<string[]>([])
    const [nome, setNome] = useState<string>('')

    function adicionarTarefa() {
        if (nome) {
            setTarefas([...tarefas, nome])
            setNome('')
        }
    }

    function excluirTarefa(i: number) {
        setTarefas(tarefas.filter((_, index) => index !== i))
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col">
                <label className="text-white" htmlFor="tarefa">Tarefa</label>
                <div className="flex gap-2 items-center">
                    <input id="tarefa"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        onKeyUp={(e) => e.key === 'Enter' && adicionarTarefa()}
                        className="bg-zinc-800 px-4 py-2 rounded outline-none text-xl text-white flex flex-1" />
                    <button onClick={adicionarTarefa} className="text-white bg-blue-500 rounded-md p-2">
                        <IconSend size={24} />
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="text-zinc-400 text-2xl font-black">Lista de Tarefas</h2>
                <ul className="flex flex-col gap-5">
                    {tarefas.map((tarefa, i) => {
                        return <li className=" bg-zinc-800 px-4 py-2 border rounded text-white flex items-center" key={i}>
                            <span className="flex-1">{tarefa}</span>
                            <IconTrash size={18}
                                onClick={() => excluirTarefa(i)}
                                className="text-red-500 cursor-pointer" />
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}
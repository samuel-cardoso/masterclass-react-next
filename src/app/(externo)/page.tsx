import { IconDashboard } from "@tabler/icons-react";
import Link from "next/link";

export default function Inicio() {
  return (
    <div className="flex flex-col items-center w-full h-96 justify-center">
      <IconDashboard size={100} stroke={0.5} className='text-zinc-500' />

      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-black text-white">
          Olá, Usuário!
        </h1>
        <p className="text-lg text-zinc-400">Seja bem-vindo ao sistema!!</p>
      </div>
        <Link className="text-white bg-blue-500 rounded-md px-4 py-2 mt-10" href='/primeiro'>Entrar</Link>
    </div>

  );
}

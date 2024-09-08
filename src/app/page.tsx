import Link from "next/link";

export default function Inicio() {
  return (
    <div className="bg-gradient-to-r from-black to-zinc-800 min-h-screen">
      <h1 className="text-white font-black">
        Masterclass Next
      </h1>
      <nav className='text-white flex flex-col'>
        <Link href='/primeiro'>Primeiro Componente</Link>
        <Link href='/flexbox'>Flexbox</Link>
        <Link href='/pagina'>Componente Pagina</Link>
      </nav>
    </div>
  );
}

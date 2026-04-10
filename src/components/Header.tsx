export function Header() {
  return (
    <header className="relative overflow-hidden py-8 px-3 bg-gradient-to-r from-emerald-700 via-emerald-800 to-green-950 text-white flex flex-col items-center justify-center shadow-lg border-b border-black/10">
      <div className="absolute inset-0 bg-white/5" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="uppercase text-3xl font-extrabold tracking-wide text-center">
          Calculadora de Tempo de Serviço
        </h1>
        <span className="text-sm text-emerald-50/80 mt-2">
          Simplificando o cálculo do seu tempo de serviço
        </span>
      </div>
    </header>
  );
}

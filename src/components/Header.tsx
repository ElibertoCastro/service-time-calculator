export function Header() {
  return (
    <header className="py-8 px-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white flex flex-col items-center justify-center shadow-lg">
      <h1 className="uppercase text-3xl font-extrabold tracking-wide drop-shadow-md text-center">
        Calculadora de Tempo de Serviço
      </h1>
      <span className="text-sm text-purple-300 mt-1">
        Simplificando o cálculo do seu tempo de serviço
      </span>
    </header>
  );
}

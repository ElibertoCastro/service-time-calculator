export function Footer() {
  return (
    <footer className="py-6 px-3 bg-gray-900 text-gray-300 flex flex-col items-center justify-center shadow-inner">
      <p className="text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Calculadora de Tempo de Serviço. Todos
        os direitos reservados.
      </p>
      <span className="text-xs text-gray-500 mt-1">
        Desenvolvido por Eliberto Castro
      </span>
    </footer>
  );
}

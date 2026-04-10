import { IoLogoLinkedin } from "react-icons/io5";

export function Footer() {
  return (
    <footer className="border-t border-emerald-900/30 bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-950 px-3 py-6 text-slate-300 shadow-inner">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center text-sm text-slate-300">
          &copy; {new Date().getFullYear()} Calculadora de Tempo de Serviço.
        </p>

        <p className="mt-1 text-xs text-emerald-100/60">
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/elibertocastro/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-emerald-200 transition-colors hover:text-white hover:underline"
          >
            Eliberto Castro
            <IoLogoLinkedin className="text-sm" />
          </a>
        </p>
      </div>
    </footer>
  );
}

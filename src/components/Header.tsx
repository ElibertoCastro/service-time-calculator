interface HeaderProps {
  switch: string;
  changeSwitch: (value: string) => void;
}

export function Header({ switch: currentSwitch, changeSwitch }: HeaderProps) {
  function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    changeSwitch(e.target.value);
  }

  return (
    <header className="relative overflow-hidden py-8 px-3 bg-gradient-to-r from-emerald-700 via-emerald-800 to-green-950 text-white flex flex-col items-center justify-center shadow-lg border-b border-black/10">
      {/* <div className="absolute inset-0 bg-white/5" /> */}

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="uppercase text-3xl font-extrabold tracking-wide text-center">
          Calculadora de Tempo de Serviço
        </h1>
        <span className="text-sm text-emerald-50/80 mt-2">
          Simplificando o cálculo do seu tempo de serviço
        </span>
      </div>

      <div className="relative w-full flex justify-end mt-6">
        <select
          name="choice"
          id="choice"
          value={currentSwitch}
          onChange={handleOnChange}
          className=" min-w-64 right-0 appearance-none rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 pr-10 text-sm font-medium text-white shadow-sm outline-none backdrop-blur-sm transition hover:bg-white/15 focus:border-emerald-200 focus:ring-2 focus:ring-emerald-200/40"
        >
          <option
            value="interval"
            className="bg-emerald-900 text-white rounded-xl"
          >
            Calcular por intervalos
          </option>

          <option
            value="countDaysOnly"
            className="bg-emerald-900 text-white rounded-xl"
          >
            Calcular pelo total de dias
          </option>
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-emerald-50/80">
          ▼
        </span>
      </div>
    </header>
  );
}

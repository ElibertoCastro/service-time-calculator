import { Header } from "./components/Header";
import { TotalResults } from "./components/TotalResult";
import { useState } from "react";
import { IntervalComp } from "./components/IntervalComp";
import { Footer } from "./components/Footer";
import { LuCalendarSearch } from "react-icons/lu";

export interface Interval {
  id: number;
  order: number;
  startDate: string;
  endDate: string;
  totalDays: number;
  years: number;
  months: number;
  days: number;
}

function App() {
  const [intervals, setInterval] = useState<Interval[]>([]);

  function handleOnAddInterval() {
    setInterval((prev) => [
      ...prev,
      {
        id: Date.now(),
        order: prev.length + 1,
        startDate: "",
        endDate: "",
        totalDays: 0,
        years: 0,
        months: 0,
        days: 0,
      },
    ]);
  }

  function handleOnRemoveInterval() {
    setInterval((prev) => prev.slice(0, -1));
  }

  function handleOnUpdateInterval(updated: Interval) {
    const arr = intervals.map((i) => {
      if (i.id === updated.id) {
        return updated;
      } else {
        return i;
      }
    });
    setInterval([...arr]);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-100 via-emerald-50/30 to-slate-200 flex flex-col text-slate-800">
      <Header />

      <main className="flex flex-1 flex-col gap-6 justify-center items-center px-3 sm:px-4 mt-6 mb-12">
        <section className="flex flex-col gap-4 w-full max-w-4xl">
          {intervals.map((interval) => (
            <IntervalComp
              key={interval.id}
              interval={interval}
              updateIntervals={handleOnUpdateInterval}
            />
          ))}
        </section>

        {intervals.length === 0 && (
          <div className="w-full max-w-2xl rounded-2xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/40 px-6 py-10 shadow-sm">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl shadow-sm">
                <LuCalendarSearch />
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-semibold text-slate-800 md:text-lg">
                  Nenhum intervalo adicionado
                </h2>

                <p className="max-w-md text-sm leading-6 text-slate-600 md:text-base">
                  Clique no botão{" "}
                  <span className="font-semibold text-emerald-800">
                    Adicionar
                  </span>{" "}
                  para informar os períodos e visualizar o cálculo total do
                  tempo de serviço.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <button
            className="rounded-md px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium shadow-sm transition-colors cursor-pointer"
            onClick={handleOnAddInterval}
          >
            Adicionar
          </button>

          <button
            className="rounded-md px-4 py-2 bg-red-700 hover:bg-red-800 text-white font-medium shadow-sm transition-colors cursor-pointer"
            onClick={handleOnRemoveInterval}
          >
            Remover
          </button>
        </div>
        {intervals.length > 0 && <TotalResults intervals={intervals} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;

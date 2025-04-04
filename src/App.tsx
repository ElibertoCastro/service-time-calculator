import { Header } from "./components/Header";
import { TotalResults } from "./components/TotalResult";
import { useState } from "react";
import { IntervalComp } from "./components/IntervalComp";
import { Footer } from "./components/Footer";

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
    intervals.pop();
    setInterval((_) => [...intervals]);
  }

  function handleOnUpdateInterval(updated: Interval) {
    const arr = intervals.map((i) => {
      if (i.id == updated.id) {
        return updated;
      } else {
        return i;
      }
    });
    setInterval([...arr]);
  }

  return (
    <>
      <div className="min-h-screen w-full bg-fuchsia-100 flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-6 justify-center items-center px-2 mt-4 mb-12">
          <section className="flex flex-col gap-4">
            {intervals.map((interval) => (
              <IntervalComp
                key={interval.id}
                interval={interval}
                updateIntervals={handleOnUpdateInterval}
              />
            ))}
          </section>
          <div className="flex gap-4">
            <button
              className="bg-emerald-500 rounded px-3 py-2 text-white font-medium cursor-pointer"
              onClick={handleOnAddInterval}
            >
              Adicionar
            </button>
            <button
              className="bg-red-600 rounded px-3 py-2 text-white font-medium cursor-pointer"
              onClick={handleOnRemoveInterval}
            >
              Remover
            </button>
          </div>
          <TotalResults intervals={intervals} />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;

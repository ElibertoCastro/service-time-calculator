import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CalculateIntervals } from "./components/CalculateIntevals";
import { useState } from "react";
import { CalculateFromDays } from "./components/CalculateFromDays";

function App() {
  const [toogleOparation, setToogleOperation] = useState("interval");

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-100 via-emerald-50/30 to-slate-200 flex flex-col text-slate-800">
      <Header switch={toogleOparation} changeSwitch={setToogleOperation} />

      <main className="flex flex-1 flex-col gap-6 justify-center items-center px-3 sm:px-4 mt-6 mb-12">
        {toogleOparation === "interval" ? (
          <CalculateIntervals />
        ) : (
          <CalculateFromDays />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;

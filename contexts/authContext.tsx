"use client";
import { Tables } from "@/database.types";
import supabase from "@/utils/supabase";
import { createContext, useContext, useEffect, useState } from "react";

interface ContextValue {
  fetching: false | true;
  setFetching: (_x: false | true) => void;
  plotsData: Tables<"plots">[] | null;
  setPlotData: (_x: Tables<"plots">[] | null) => void;
  getPlots: () => void;
  selectedPlot: Tables<"plots"> | null;
  setSelectedPlot: (_x: Tables<"plots"> | null) => void;
}

const defaultProvider: ContextValue = {
  fetching: true,
  setFetching: () => {},
  plotsData: null,
  setPlotData: () => {},
  getPlots: () => {},
  selectedPlot: null,
  setSelectedPlot: () => {},
};

const AuthDetailsContext = createContext<ContextValue>(defaultProvider);
const useAuthDetailsContext = () => useContext(AuthDetailsContext);
function AuthDetailsProvider({ children }: { children: React.ReactNode }) {
  const [fetching, setFetching] = useState<false | true>(true);
  const [plotsData, setPlotData] = useState<Tables<"plots">[] | null>(null);
  const [selectedPlot, setSelectedPlot] = useState<Tables<"plots"> | null>(
    null
  );
  const getPlots = async () => {
    const { data } = await supabase.from("plots").select().order('name', { ascending: false });

    setPlotData(data);
  };
  useEffect(() => {
    getPlots();
  }, []);

  return (
    <AuthDetailsContext.Provider
      value={{
        fetching,
        setFetching,
        plotsData,
        setPlotData,
        getPlots,
        selectedPlot,
        setSelectedPlot,
      }}
    >
      {children}
    </AuthDetailsContext.Provider>
  );
}

export { AuthDetailsProvider, useAuthDetailsContext };
// supabase gen types typescript --project-id xpbnzfstbxyytrvymfdc > database.types.ts

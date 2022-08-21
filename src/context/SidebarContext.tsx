import {
  createContext,
  useContext,
  useState,
} from "react";

interface SideBarProviderProps {
  children: React.ReactNode;
}

interface SideBarContextData {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const SidebarContext = createContext({} as SideBarContextData);

export function SidebarProvider({ children }: SideBarProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export const useSideBar = () => useContext(SidebarContext);

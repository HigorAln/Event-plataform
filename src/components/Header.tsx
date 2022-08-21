import { List } from "phosphor-react";
import { Logo } from "./Logo";
import { useSideBar } from '../context/SidebarContext';

export function Header(){
  const { setIsSidebarOpen, isSidebarOpen } = useSideBar();
  return(
    <header className="w-full py-5 flex items-center justify-between sm:justify-center px-4 sm:px-0 bg-gray-700 border-b border-gray-600">
      <Logo />
      <List className="flex sm:hidden" size={24} onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
    </header>
  )
}
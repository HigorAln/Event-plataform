import { SidebarProvider } from "./context/SidebarContext"
import { Event } from "./pages/Event"
import { Router } from "./Router"

function App() {
  return (
    <SidebarProvider>
      <Router />
    </SidebarProvider>
  ) 
}

export default App

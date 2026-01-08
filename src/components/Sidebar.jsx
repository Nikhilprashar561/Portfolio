import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Sidebar() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarTrigger className={"block h-screen w-fit justify-center pl-2 pr-1 md:hidden"} />
      </SidebarInset>
    </SidebarProvider>
  );
}

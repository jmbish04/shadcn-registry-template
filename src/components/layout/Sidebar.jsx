import { Home, LayoutGrid, Settings } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r p-4 flex flex-col gap-2">
      <div className="text-xl font-semibold text-primary">Shadcn Dashboard</div>
      <Separator />
      <nav className="flex-1 mt-2 space-y-1">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Home size={16} /> Home
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <LayoutGrid size={16} /> Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings size={16} /> Settings
        </Button>
      </nav>
      <Separator />
      <div className="text-xs text-muted-foreground">v0.1.0</div>
    </aside>
  );
}

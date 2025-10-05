import { Home, LayoutGrid, Settings } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../ui/sidebar";

export const NAV_ITEMS = [
  { key: "home", label: "Home", icon: Home },
  { key: "dashboard", label: "Dashboard", icon: LayoutGrid },
  { key: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ activeItem, onSelect }) {
  return (
    <SidebarPrimitive className="h-screen">
      <SidebarHeader>
        <div className="text-xl font-semibold text-primary">Shadcn Dashboard</div>
      </SidebarHeader>
      <SidebarContent>
        <nav className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.key;

            return (
              <Button
                key={item.key}
                type="button"
                variant={isActive ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
                aria-current={isActive ? "page" : undefined}
                onClick={() => onSelect?.(item)}
              >
                <Icon size={16} aria-hidden="true" /> {item.label}
              </Button>
            );
          })}
        </nav>
      </SidebarContent>
      <SidebarFooter>v0.1.0</SidebarFooter>
    </SidebarPrimitive>
  );
}

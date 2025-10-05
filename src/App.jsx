import { useMemo, useState } from "react";
import "./index.css";
import Dashboard from "./components/layout/Dashboard";
import Sidebar, { NAV_ITEMS } from "./components/layout/Sidebar";

const DASHBOARD_STATS = {
  home: [
    { title: "Quick Tips", value: "Get started", change: "Review the onboarding checklist" },
    { title: "Team Invites", value: "2 pending" },
    { title: "Notifications", value: "5 unread" },
  ],
  dashboard: [
    { title: "Active Users", value: "1,230", change: "+5.2% vs last week" },
    { title: "Revenue", value: "$87.4K", change: "+12.4% vs target" },
    { title: "Support Tickets", value: "32", change: "8 resolved in the last hour" },
  ],
  settings: [
    { title: "Profile Completion", value: "82%", change: "Add billing details to finish" },
    { title: "Team Roles", value: "4 assigned" },
    { title: "API Keys", value: "3 active", change: "Rotate keys every 90 days" },
  ],
};

export default function App() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const currentNav = useMemo(
    () => NAV_ITEMS.find((item) => item.key === activeItem),
    [activeItem],
  );

  const pageTitle = currentNav?.label ?? "Dashboard";
  const stats = DASHBOARD_STATS[activeItem] ?? DASHBOARD_STATS.dashboard;

  return (
    <div className="flex min-h-screen">
      <Sidebar activeItem={activeItem} onSelect={(item) => setActiveItem(item.key)} />
      <main className="flex-1">
        <header className="border-b p-4">
          <h1 className="text-2xl font-semibold text-primary">{pageTitle}</h1>
        </header>
        <Dashboard stats={stats} />
      </main>
    </div>
  );
}

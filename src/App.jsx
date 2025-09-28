import "./index.css";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/layout/Dashboard";

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <header className="border-b p-4">
          <h1 className="text-2xl font-semibold text-primary">Dashboard</h1>
        </header>
        <Dashboard />
      </main>
    </div>
  );
}

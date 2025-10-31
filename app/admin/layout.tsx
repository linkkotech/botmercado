import Link from "next/link";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-8 text-foreground">BotMercado</h1>
          <nav className="flex flex-col gap-2">
            <Link
              href="/admin/dashboard"
              className="px-4 py-2 rounded-md hover:bg-accent text-foreground transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/companies"
              className="px-4 py-2 rounded-md hover:bg-accent text-foreground transition-colors"
            >
              Empresas
            </Link>
            <Link
              href="/admin/plans"
              className="px-4 py-2 rounded-md hover:bg-accent text-foreground transition-colors"
            >
              Planos
            </Link>
            <Link
              href="/admin/settings"
              className="px-4 py-2 rounded-md hover:bg-accent text-foreground transition-colors"
            >
              Configurações
            </Link>
          </nav>
        </div>

        {/* Logout Button */}
        <Button variant="outline" className="w-full gap-2">
          <LogOut className="w-4 h-4" />
          Sair
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background p-8">{children}</main>
    </div>
  );
}

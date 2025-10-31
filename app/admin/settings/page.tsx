export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground mt-2">
          Gerencie as configurações do sistema
        </p>
      </div>

      <div className="grid gap-6">
        <div className="rounded-lg border bg-card p-6 space-y-4">
          <h2 className="text-lg font-semibold">Sistema</h2>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">Versão:</span> 0.1.0
            </p>
            <p className="text-sm">
              <span className="font-medium">Ambiente:</span> {process.env.NODE_ENV}
            </p>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 space-y-4">
          <h2 className="text-lg font-semibold">Conta</h2>
          <p className="text-muted-foreground text-sm">
            Configurações de segurança e perfil
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CompaniesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Empresas</h1>
        <p className="text-muted-foreground mt-2">
          Gerencie as empresas cadastradas no sistema
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground text-sm">
          Nenhuma empresa cadastrada ainda. Adicione uma nova empresa para começar.
        </p>
      </div>
    </div>
  );
}

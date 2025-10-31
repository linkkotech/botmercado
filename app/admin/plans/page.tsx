export default function PlansPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Planos</h1>
        <p className="text-muted-foreground mt-2">
          Gerencie os planos de assinatura disponíveis
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground text-sm">
          Nenhum plano cadastrado ainda. Adicione um novo plano para começar.
        </p>
      </div>
    </div>
  );
}

"use client";

import { RegisterForm } from "@/components/forms/register-form";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Criar Conta</h1>
          <p className="mt-2 text-muted-foreground">
            Junte-se a nós e comece a usar a plataforma
          </p>
        </div>

        {/* Register Form */}
        <RegisterForm />

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © 2025 BotMercado. Todos os direitos reservados.
        </p>
      </div>
    </main>
  );
}

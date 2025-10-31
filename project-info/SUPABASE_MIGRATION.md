# Guia de Migração Supabase: auth-helpers-nextjs → @supabase/ssr

## O que foi feito

✅ Removido: `@supabase/auth-helpers-nextjs@0.10.0` (deprecated)
✅ Adicionado: `@supabase/ssr@0.5.1` (recomendado)

## Estrutura de Arquivos Criada

```
lib/supabase/
├── server.ts        # Cliente para Server Components
├── client.ts        # Cliente para Client Components  
└── index.ts         # Exportações centralizadas
```

## Mudanças de Importação

### Antes (DEPRECATED)
```typescript
import { createServerSupabaseClient, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
```

### Depois (NOVO PADRÃO)
```typescript
// Em Server Components
import { createServerClient } from "@/lib/supabase";
const supabase = await createServerClient();

// Em Client Components
import { createBrowserClient } from "@/lib/supabase";
const supabase = createBrowserClient();
```

## Padrões de Uso

### Server Component
```typescript
import { createServerClient } from "@/lib/supabase";

export default async function Dashboard() {
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  return <div>Bem-vindo {user?.email}</div>;
}
```

### Client Component
```typescript
"use client";

import { createBrowserClient } from "@/lib/supabase";
import { useEffect, useState } from "react";

export function DataTable() {
  const [data, setData] = useState([]);
  const supabase = createBrowserClient();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("users").select();
      setData(data);
    };
    fetchData();
  }, []);

  return <table>{/* renderizar dados */}</table>;
}
```

## Detalhes Técnicos

### Por que @supabase/ssr é melhor?

1. **Gerenciamento de Sessão Automático** - Cookies são sincronizados automaticamente
2. **Melhor Suporte a Server Components** - Design otimizado para RSC
3. **Padrão Oficial** - Recomendado pelo Supabase e mantido ativamente
4. **Menor Bundle Size** - Remover dependências deprecated reduz o tamanho da aplicação

### Variáveis de Ambiente

Adicionar ao `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
```

## Próximos Passos

1. Instale as dependências: `npm install`
2. Configure suas credenciais Supabase em `.env.local`
3. Comece a usar os novos clientes em seus componentes
4. Consulte a seção "Supabase Integration" no `.github/copilot-instructions.md` para exemplos

## Referências

- [Documentação oficial @supabase/ssr](https://supabase.com/docs/guides/auth/server-side-rendering)
- [Guia Next.js + Supabase](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)

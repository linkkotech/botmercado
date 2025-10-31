# CONTEXTO DO PROJETO E REGRAS

## 1. Stack de Tecnologia Principal (Tech Stack)
Somos estritamente um projeto construído com a seguinte stack. Todo o código gerado deve ser compatível e seguir as convenções destas tecnologias:
- **Framework:** Next.js 15, utilizando exclusivamente o **App Router**.
- **Linguagem:** TypeScript. Use tipagem estrita sempre que possível. Evite o uso de `any`.
- **React:** React 19. Utilize componentes funcionais com Hooks.
- **Estilização:** Exclusivamente Tailwind CSS 4. Não use CSS Modules, Styled Components, ou estilos inline em tags, a menos que seja para uma propriedade dinâmica muito específica.
- **Componentes de UI:** Nosso sistema de design é o **shadcn/ui**. Sempre que precisar de um componente de UI (Botão, Input, Card, etc.), utilize um componente de `shadcn/ui` importado de `@/components/ui`. Não sugira ou use outras bibliotecas de componentes como Material-UI ou Chakra UI.
- **Backend e Autenticação:** **Supabase** é nossa única solução de backend. Para interações com o banco de dados, use o cliente do Supabase (`@supabase/supabase-js`). Para autenticação e gerenciamento de sessão, utilize `@supabase/ssr`, seguindo os padrões para Server Components e Client Components.

## 2. Padrões de Código e Arquitetura
- **Estrutura de Arquivos:** O projeto utiliza a raiz `/app` para o App Router do Next.js 15 e `/lib` para utilitários. Todo o código da aplicação deve estar dentro de `app/`.
- **Roteamento:** Utilize o roteamento baseado em arquivos do App Router. Crie pastas para rotas e use arquivos `page.tsx`, `layout.tsx`, e `loading.tsx` conforme necessário.
- **Componentes do Servidor (RSC):** Por padrão, todos os componentes no App Router são Componentes do Servidor. Mantenha-os assim para buscar dados e lógica de backend.
- **Componentes do Cliente:** Adicione a diretiva `"use client"` apenas quando for estritamente necessário (ex: para usar Hooks como `useState`, `useEffect`, ou para interatividade do usuário).
- **Importações:** Use sempre importações absolutas com o alias `@/` (ex: `import { Button } from '@/components/ui/button'`).
- **Proteção de Rotas:** Middleware em `middleware.ts` protege rotas `/admin/*` e `/auth/*` baseado em tokens de sessão Supabase.

## 3. Regras Específicas e Restrições
- **Arquivos Markdown (.md):** Esta é uma regra estrita. **NÃO CRIE** arquivos Markdown (`.md`) a menos que eu peça explicitamente. Se a criação de um arquivo de documentação for absolutamente necessária e solicitada, ele **DEVE** ser colocado dentro de uma pasta `project-info/` na raiz do projeto.
- **Variáveis de Ambiente:** Ao usar variáveis de ambiente, espere que elas estejam definidas em `.env.local` e sejam acessadas via `process.env`. Para variáveis do lado do cliente, elas devem ter o prefixo `NEXT_PUBLIC_`.
- **Tratamento de Dados:** Para buscar dados no Supabase em Componentes do Servidor, crie uma função assíncrona e a chame diretamente no componente. Não use `useEffect` para buscar dados em componentes de servidor.

## 4. Integração Supabase com @supabase/ssr

O projeto utiliza `@supabase/ssr` (NÃO a biblioteca deprecated `@supabase/auth-helpers-nextjs`).

### Server Components
- Use `createServerClient()` importado de `@/lib/supabase`
- Gerencia cookies de sessão automaticamente
- Exemplo:
```typescript
import { createServerClient } from "@/lib/supabase";

export default async function Dashboard() {
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  return <div>Bem-vindo {user?.email}</div>;
}
```

### Client Components
- Use `createBrowserClient()` importado de `@/lib/supabase`
- Requer a diretiva `"use client"` no topo do arquivo
- Exemplo:
```typescript
"use client";
import { createBrowserClient } from "@/lib/supabase";
import { useEffect, useState } from "react";

export function UserData() {
  const [data, setData] = useState(null);
  const supabase = createBrowserClient();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("tabela").select();
      setData(data);
    };
    fetchData();
  }, []);

  return <div>{/* renderizar dados */}</div>;
}
```

### Variáveis de Ambiente Necessárias
- `NEXT_PUBLIC_SUPABASE_URL` – URL do projeto Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` – Chave anon do Supabase

## 5. Estrutura do Projeto e Rotas

### Estrutura de Pastas
```
app/
  ├─ page.tsx              # Página raiz com redirecionamento
  ├─ layout.tsx            # Layout global
  ├─ auth/
  │  ├─ login/page.tsx     # Página de login
  │  └─ register/page.tsx  # Página de registro
  ├─ admin/
  │  ├─ layout.tsx         # Layout do painel admin com sidebar
  │  ├─ dashboard/page.tsx # Dashboard principal
  │  ├─ companies/page.tsx # Gerenciamento de empresas
  │  ├─ plans/page.tsx     # Gerenciamento de planos
  │  └─ settings/page.tsx  # Configurações do sistema
  └─ api/
     └─ auth/
        ├─ login/route.ts  # Rota para login (POST)
        └─ logout/route.ts # Rota para logout (POST)

components/
  ├─ ui/                   # Componentes shadcn/ui
  ├─ forms/                # Formulários customizados
  └─ layout/               # Componentes de layout

lib/
  ├─ supabase/
  │  ├─ client.ts          # Cliente para Client Components
  │  ├─ server.ts          # Cliente para Server Components
  │  └─ index.ts           # Exportações centralizadas
  └─ utils.ts              # Utilitários (cn(), etc)

types/
  └─ index.d.ts            # Tipos TypeScript globais
```

### Fluxo de Autenticação
1. Usuário não autenticado é redirecionado para `/auth/login` (middleware)
2. Após login bem-sucedido, redireciona para `/admin/dashboard`
3. Cookie de sessão (`sb-access-token`) é verificado pelo middleware para proteger rotas
4. Usuário autenticado em `/auth/*` é redirecionado para `/admin/dashboard`

### Tipo Multi-tenant
- Por enquanto, o sistema funciona com 1 empresa padrão
- Estrutura preparada para futura expansão multi-tenant (coluna `company_id` nas tabelas)

## 6. Avisos Importantes
- ⚠️ Use `cn()` ao invés de concatenação de strings para classes Tailwind
- ⚠️ Adicione `'use client'` no topo de arquivos que usam React Hooks
- ⚠️ Aliases de caminho devem começar com `@/` – não use importações relativas
- ⚠️ Garanta conformidade com TypeScript strict mode – sem tipos implícitos
- ⚠️ NÃO use `@supabase/auth-helpers-nextjs` (deprecated) – use `@supabase/ssr`
- ⚠️ Clientes de servidor devem ser aguardados: `const supabase = await createServerClient()`
- ⚠️ Clientes de browser são síncronos: `const supabase = createBrowserClient()`
# BotMercado

Um sistema de gerenciamento multi-tenant fullstack construído com **Next.js 15**, **React 19**, **Supabase** e **Tailwind CSS**.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Frontend:** React 19 + Tailwind CSS 4 + shadcn/ui
- **Backend & Auth:** Supabase (@supabase/ssr)
- **Banco de Dados:** PostgreSQL (Supabase)
- **Validação:** TypeScript strict mode
- **Componentes:** shadcn/ui + Radix UI

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no [Supabase](https://supabase.com)

## ⚙️ Configuração Inicial

### 1. Clone o repositório

```bash
git clone https://github.com/linkkotech/botmercado.git
cd botmercado
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Edite `.env.local` com suas credenciais Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_aqui
```

### 4. Execute o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) em seu navegador.

## 📁 Estrutura do Projeto

```
app/
├─ page.tsx                 # Home (redireciona baseado em auth)
├─ layout.tsx              # Layout global
├─ auth/
│  ├─ login/page.tsx       # Página de login
│  └─ register/page.tsx    # Página de registro
├─ admin/
│  ├─ layout.tsx           # Layout com sidebar
│  ├─ dashboard/page.tsx   # Dashboard principal
│  ├─ companies/page.tsx   # Gerenciamento de empresas
│  ├─ plans/page.tsx       # Gerenciamento de planos
│  └─ settings/page.tsx    # Configurações
└─ api/auth/
   ├─ login/route.ts       # Rota POST /api/auth/login
   └─ logout/route.ts      # Rota POST /api/auth/logout

components/
├─ ui/                     # Componentes shadcn/ui
├─ forms/                  # Formulários customizados
└─ layout/                 # Componentes de layout

lib/
├─ supabase/
│  ├─ client.ts           # Cliente para Client Components
│  ├─ server.ts           # Cliente para Server Components
│  └─ index.ts            # Exportações centralizadas
└─ utils.ts               # Funções utilitárias

types/
└─ index.d.ts             # Definições de tipos TypeScript
```

## 🔐 Autenticação

O projeto usa **Supabase Auth** com gerenciamento de sessão via cookies:

1. **Login:** Usuário acessa `/auth/login` 
2. **Middleware:** Verifica token e redireciona
3. **Proteção:** Rotas `/admin/*` requerem autenticação
4. **Dashboard:** Após login, redireciona para `/admin/dashboard`

## 🛠️ Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Lint do código
npm run lint
```

## 🎨 Componentes shadcn/ui

O projeto usa shadcn/ui para componentes de UI reutilizáveis:

```bash
# Adicionar novos componentes
npx shadcn@latest add [component-name]
```

Componentes já instalados:
- Button
- Input
- Card

## 📝 Tipos TypeScript

Tipos globais estão definidos em `types/index.d.ts`:

```typescript
interface User {
  id: string;
  email: string;
  name?: string;
  created_at: string;
}

interface Company {
  id: string;
  name: string;
  slug: string;
  // ...
}

interface Plan {
  id: string;
  name: string;
  price: number;
  // ...
}
```

## 🔄 Fluxo de Desenvolvimento

1. **Criar nova página:** Adicione um arquivo `page.tsx` em `app/[rota]/`
2. **Novo componente:** Crie em `components/` com a diretiva `"use client"` se necessário
3. **Servidor de dados:** Use Server Components por padrão
4. **Estilos:** Use apenas Tailwind CSS com a função `cn()` para classes condicionais
5. **Tipos:** Sempre adicione tipos TypeScript - sem `any`

## 🚨 Regras Importantes

- ✅ Use `cn()` para mesclar classes Tailwind
- ✅ Adicione `"use client"` em componentes com hooks
- ✅ Use importações com `@/` (nunca importações relativas entre diretórios)
- ✅ TypeScript strict mode ativado
- ✅ Sempre use `await` ao criar cliente Supabase no servidor

## 📚 Documentação

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Instruções AI Copilot](./.github/copilot-instructions.md)

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
2. Commit suas mudanças (`git commit -m 'feat: adicione MinhaFeature'`)
3. Push para a branch (`git push origin feature/MinhaFeature`)
4. Abra um Pull Request

## 📄 Licença

Este projeto é privado. Não é permitida distribuição sem permissão.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato com o time de desenvolvimento.

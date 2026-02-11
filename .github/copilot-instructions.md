# Instruções do GitHub Copilot

## Visão geral do app
- Stack: React + Vite + TypeScript + Tailwind CSS + shadcn-ui (Radix) + Framer Motion.
- Ponto de entrada: `src/main.tsx` renderiza `App`.
- `src/App.tsx` registra providers (React Query, TooltipProvider, Toaster/Sonner) e rotas do React Router (`/` e `*`). Mantenha o catch-all por último.

## Estrutura e composição
- A landing page principal é `src/pages/Index.tsx`, composta por seções em `src/components` (ex.: `Header`, `Hero`, `PainPoints`). Novas seções devem seguir esse padrão.
- Componentes de UI reutilizáveis ficam em `src/components/ui` (shadcn + Radix). Reuse antes de criar novos.
- Para classes/variantes, use `cn` de `src/lib/utils.ts` e `class-variance-authority` (ex.: `src/components/ui/button.tsx`).

## UI/UX e animações
- Texto visível ao usuário deve permanecer em português, salvo pedido explícito.
- Use Tailwind para estilos; evite CSS inline quando classes forem suficientes.
- Animações de entrada usam `ScrollReveal`, `StaggerContainer` e `StaggerItem` em `src/components/ScrollReveal.tsx`.

## Convensões técnicas
- Prefira imports com o alias `@/` (configurado em `tsconfig.json`).
- Evite adicionar dependências sem necessidade clara e alinhada ao projeto.

## Workflows úteis
- Dev: `npm run dev`
- Build/Preview: `npm run build`, `npm run preview`
- Lint/Test: `npm run lint`, `npm run test` (Vitest em `src/test`)

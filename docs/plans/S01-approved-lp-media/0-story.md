# S01 — Approved LP Media

## Objetivo

Adicionar as imagens e vídeos aprovados da MARENA na landing page como prova real de campo, reforçando confiança e conversão para WhatsApp sem comprometer performance mobile.

## Contexto

A landing atual já possui narrativa de conversão clara, mas usa imagens geradas/antigas em pontos de prova visual. As mídias aprovadas em `C:\Users\user\Documents\victor\bira\marena\imagens\aprovadas-lp` devem substituir esse material genérico e aparecer de forma estratégica: hero legível, prova de problema real, capacidade operacional, processo em campo e galeria final.

## Regras de aceite

- [x] Assets aprovados copiados para `public/marena/approved-lp/` com nomes estáveis.
- [x] Mídias referenciadas por configuração tipada, sem paths e legendas espalhados pelos componentes.
- [x] Hero usa foto real com overlay legível e CTA preservado.
- [x] Página inclui prova visual de problema real e capacidade operacional antes da galeria.
- [x] Processo inclui vídeo vertical fora do primeiro viewport com carregamento leve.
- [x] Galeria substitui imagens geradas por fotos/vídeos reais aprovados.
- [x] Imagens fora do primeiro viewport usam lazy loading e dimensões/aspect ratio estáveis.
- [x] `pnpm test` e `pnpm build` executados.
- [x] Revisão visual desktop/mobile realizada.

## Dependências

- Mídias finais em `C:\Users\user\Documents\victor\bira\marena\imagens\aprovadas-lp`.
- Stack atual: Vite, React, TypeScript strict, Tailwind, shadcn/ui.

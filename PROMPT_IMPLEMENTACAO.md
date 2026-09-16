# 🎯 PROMPT PARA ANTIGRAVITY IMPLEMENTAR MELHORIAS

Você é um desenvolvedor senior Next.js/React/TypeScript.

Implemente as seguintes melhorias no site MaximoSistemas:

## CONTEXTO DO PROJETO
- Framework: Next.js 16 (App Router)
- Linguagem: TypeScript + React 19
- Estilo: Tailwind CSS
- Deploy: GitHub (main → producao) → Hostinger

## ESTRUTURA ATUAL

app/
├── layout.tsx (HEAD, metatags)
├── page.tsx (página principal)
└── globals.css (estilos globais)
components/
├── landing/ (efeitos visuais)
├── ui/ (componentes reutilizáveis)
└── portfolio-page.tsx (PÁGINA COMPLETA)


## TAREFAS (NA ORDEM)

### PRIORIDADE 1 - Implementar IMEDIATAMENTE

#### 1.1 - Adicionar Seção "SERVIÇOS CONTÍNUOS"
**Onde:** Em `components/portfolio-page.tsx`, após seção "POR QUE A MAXIMOSISTEMAS"

**O que fazer:**
- Criar novo componente `components/landing/continuous-services.tsx`
- 3 cards de planos: R$ 199, R$ 399, R$ 699
- Cada card com features, preço, e botão WhatsApp customizado
- Responsive mobile-first (375px, 768px, 1920px)

**Design:**
- Cores: Use tema Neon Blue/Green do globals.css
- Tipografia: Consistente com site atual
- Efeito hover: Transições suaves

#### 1.2 - Adicionar Seção "QUEM SOMOS"
**Onde:** Logo após Hero Section

**O que fazer:**
- Componente `components/landing/about-section.tsx`
- Esquerda: Texto + números (50+ projetos, 8+ anos, 90% satisfação)
- Direita: Placeholder para foto (user coloca depois)
- Links sociais: Instagram, WhatsApp, Email

#### 1.3 - Adicionar Seção "DEPOIMENTOS"
**Onde:** Antes de "PROJETOS EM PRODUÇÃO"

**O que fazer:**
- Componente `components/landing/testimonials.tsx`
- Grid 3 colunas (responsive: 1 no mobile)
- 6 cards de depoimentos
- Cada card: Avatar + Estrelas + Texto + Nome + Cargo

#### 1.4 - Mostrar Faixa de Preço
**Onde:** Na seção "O QUE FAZEMOS", após cada card de solução

**O que fazer:**
- Adicionar componente de preço em cada card
- "A partir de R$ XXX"
- Valores: 800, 1500, "Orçamento"

### PRIORIDADE 2 - Implementar Depois

#### 2.1 - Melhorar CTAs com WhatsApp Customizado
**Links personalizados por segmento:**
- Lanchonetes: mensagem específica
- Barbearias: mensagem específica
- Salões: mensagem específica

#### 2.2 - Adicionar Seção FAQ
**Componente:** `components/landing/faq-section.tsx`
- 6 perguntas frequentes
- Accordion (abrir/fechar)
- Responder dúvidas de conversão

## REQUISITOS TÉCNICOS

✅ **TypeScript:** Tipagem completa
✅ **Tailwind:** Use classes do projeto (dark:, responsive)
✅ **Responsividade:** 375px (mobile), 768px (tablet), 1920px (desktop)
✅ **Performance:** Lazy loading de imagens, otimizar CSS
✅ **Acessibilidade:** Alt em imagens, semântica HTML
✅ **Dark Mode:** Suporte ao tema escuro

## CORES DO TEMA (globals.css)
- Preto: #050505
- Cinza: #f5f5f5
- Neon Blue: [verifique em globals.css]
- Neon Green: [verifique em globals.css]

## APÓS IMPLEMENTAR

1. Testar em mobile (375px)
2. Testar em tablet (768px)
3. Testar em desktop (1920px)
4. Todos os links de WhatsApp funcionando
5. Nenhuma quebra de layout

## ESTRUTURA DE COMPONENTES

Crie componentes separados em `components/landing/`:
- `continuous-services.tsx`
- `about-section.tsx`
- `testimonials.tsx`
- `faq-section.tsx`

Depois importe em `portfolio-page.tsx`:
```tsx
import ContinuousServices from '@/components/landing/continuous-services'
import AboutSection from '@/components/landing/about-section'
import Testimonials from '@/components/landing/testimonials'
import FAQ from '@/components/landing/faq-section'
```

## INICIAR

1. Leia este prompt completamente
2. Verifique estrutura atual em `components/portfolio-page.tsx`
3. Comece por 1.1 (Serviços Contínuos)
4. Quando terminar, avise para passar para próximo

Está pronto? Responda "SIM" e vamos começar.
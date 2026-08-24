# 🚀 MaximoSistemas — Portfólio & Desenvolvimento Digital

Website e portfólio oficial da **MaximoSistemas**, construído com tecnologias modernas de desenvolvimento web para alta performance, design futurista/neon brutalista e total responsividade em todos os dispositivos.

---

## 📌 Índice

- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Arquitetura de Branches no Git](#-arquitetura-de-branches-no-git)
- [Como Rodar Localmente](#-como-rodar-localmente)
- [Como Fazer Deploy (Atualização no GitHub e Hostinger)](#-como-fazer-deploy-atualização-no-github-e-hostinger)
- [Configuração Inicial na Hostinger](#-configuração-inicial-na-hostinger)
- [Resumo dos Comandos Úteis](#-resumo-dos-comandos-úteis)

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Linguagem:** TypeScript / JavaScript (React 19)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) com paleta personalizada (Dark mode, Neon Blue, Neon Green)
- **Efeitos Visuais e 3D:** Canvas 2D / Three.js / Partículas interativas
- **Ícones:** [Lucide React](https://lucide.dev/) e [React Icons](https://react-icons.github.io/react-icons/)
- **Tema:** `next-themes` (Dark/Light mode)
- **Deploy:** `gh-pages` para branch isolada de produção (`producao`)

---

## 📁 Estrutura de Pastas

```text
Site-Efeito/
├── app/                        # Estrutura de rotas e metadados do Next.js
│   ├── globals.css             # Estilos globais e tokens de cores
│   ├── layout.tsx              # Estrutura HTML raiz (<head>, fontes, metatags, favicons)
│   └── page.tsx                # Página principal (carrega o PortfolioPage)
├── components/                 # Componentes React
│   ├── landing/                # Elementos visuais (Canvas 3D, ondas, esferas, partículas)
│   ├── ui/                     # Componentes de interface reutilizáveis
│   └── portfolio-page.tsx      # Página completa do portfólio (Hero, Serviços, Processo, Cases, Contato)
├── public/                     # Arquivos estáticos
│   ├── favicon.ico             # Ícone do navegador
│   ├── icon.png, apple-icon... # Ícones em vários tamanhos para mobile/PWA
│   └── images/
│       └── logo/               # Logos da MaximoSistemas em alta resolução (192, 512, 1024)
├── out/                        # Pasta gerada pelo build estático (contém index.html para deploy)
├── next.config.mjs             # Configuração do Next.js (output: 'export')
├── package.json                # Dependências e scripts de execução/deploy
├── DEPLOY.md                   # Guia passo a passo de deploy na Hostinger
└── README.md                   # Esta documentação
```

---

## 🌿 Arquitetura de Branches no Git

O projeto utiliza uma estratégia de **duas branches** para separar código-fonte de arquivos estáticos prontos para hospedagem:

| Branch | Objetivo | O que contém |
|---|---|---|
| **`main`** | Desenvolvimento | Código-fonte completo em Next.js/TypeScript/React |
| **`producao`** | Hospedagem Hostinger | **Apenas** os arquivos estáticos compilados (com o `index.html` diretamente na raiz) |

> ⚠️ **Importante:** Você programa e faz commits sempre na branch **`main`**. O script de deploy se encarrega de atualizar a branch **`producao`** automaticamente.

---

## 💻 Como Rodar Localmente

1. **Instalar dependências (caso não tenha instalado):**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar no navegador:**
   - Abra [http://localhost:3000](http://localhost:3000)

---

## 🚀 Como Fazer Deploy (Atualização no GitHub e Hostinger)

Sempre que você fizer alterações no código (textos, fotos, projetos, links), siga estes **3 passos simples**:

### 1️⃣ Salvar e enviar o código-fonte para o GitHub (`main`)
```bash
git add .
git commit -m "sua mensagem descrevendo a alteração"
git push origin main
```

### 2️⃣ Gerar a versão de produção e publicar na branch `producao`
```bash
npm run build
npm run deploy
```

> ℹ️ O comando `npm run deploy` utiliza o pacote `gh-pages` para pegar o conteúdo da pasta `out/` e enviá-lo diretamente para a raiz da branch `producao` no GitHub.

---

## 🌐 Configuração Inicial na Hostinger

Para que a Hostinger leia o seu site automaticamente a partir do GitHub:

1. Acesse o **hPanel da Hostinger** e vá em **Avançado** > **Git**.
2. Configure os seguintes campos:
   - **Repositório:** `https://github.com/SidneyMaximo/maximosistemas.git`
   - **Branch:** `producao` *(selecione exatamente `producao`, e NÃO `main`)*
   - **Diretório de instalação:** `/public_html` (ou raiz do domínio)
3. Clique em **Criar** / **Implantar**.
4. **Deploy Contínuo:** No painel Git da Hostinger, você pode copiar o link do **Webhook** e cadastrá-lo no seu GitHub (*Settings > Webhooks*), fazendo com que a cada `npm run deploy`, a Hostinger atualize o site no mesmo segundo!

---

## 📋 Resumo dos Comandos Úteis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o site em modo de desenvolvimento em `localhost:3000` |
| `npm run build` | Compila o Next.js e gera os arquivos estáticos na pasta `out/` |
| `npm run deploy` | Envia o conteúdo da pasta `out/` para a branch `producao` no GitHub |
| `git status` | Verifica quais arquivos foram modificados |
| `git push origin main` | Envia suas alterações de código para a branch `main` |

---

Desenvolvido por **MaximoSistemas** — Desenvolvimento Digital.

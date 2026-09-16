# 📋 Documentação Técnica do Projeto — MaximoSistemas

> **Documento de Referência Técnica, Arquitetura e Procedimentos Operacionais**  
> *Última atualização: Setembro / 2026*

---

## 1. Visão Geral da Arquitetura

O site da **MaximoSistemas** é uma Landing Page moderna de alta conversão, focada em prestação de serviços de desenvolvimento web e sistemas sob medida para empresas, MEIs e negócios locais.

### Stack Tecnológica
- **Framework Principal:** Next.js 16.2.0 (App Router, Turbopack)
- **Linguagem:** TypeScript 5+ / React 19
- **Estilização:** Tailwind CSS com variáveis CSS para suporte completo a Dark/Light Mode
- **Exportação:** Estática (`output: 'export'` no `next.config.mjs`) para servir como HTML/CSS/JS estático puro
- **Efeitos Visuais:** Canvas interativo com animação de partículas (`components/landing/agent-particle-canvas.tsx`)
- **Ícones:** Lucide React (`lucide-react`) e React Icons (`react-icons/fa`)
- **Gerenciador de Temas:** `next-themes` (Dark/Light mode)

---

## 2. Estrutura de Arquivos e Componentes

```text
maximosistemas/
├── app/
│   ├── globals.css                 # Configurações de cores, classes utilitárias e estilos globais
│   ├── layout.tsx                  # Metadados de SEO (OpenGraph, Twitter), fontes Barlow e IBM Plex Mono
│   └── page.tsx                    # Ponto de entrada (renderiza <PortfolioPage />)
├── components/
│   ├── landing/                    # Seções modulares da página
│   │   ├── about-section.tsx       # Seção "Quem Somos" (Apresentação de Sidney Máximo + foto + métricas)
│   │   ├── agent-particle-canvas.tsx # Efeito visual de partículas no Hero
│   │   ├── continuous-services.tsx # Seção de planos mensais e suporte contínuo
│   │   ├── faq-section.tsx         # Perguntas frequentes interativas (acordeom)
│   │   └── testimonials.tsx        # Depoimentos e prova social de clientes
│   ├── ui/                         # Componentes de base (botões, dropdowns, inputs)
│   ├── portfolio-page.tsx          # Orquestrador principal da landing page
│   └── theme-provider.tsx          # Provedor do tema Dark/Light
├── public/                         # Arquivos públicos servidos diretamente
│   ├── favicon.ico, icon-*.png     # Ícones e favicons para navegador e mobile
│   └── images/
│       ├── logo/                   # Logos oficiais da MaximoSistemas
│       ├── demos/                  # Ilustrações conceituais dos nichos (lanchonete, barbearia, salão)
│       └── Foto profissional.PNG   # Foto do fundador Sidney Máximo
├── out/                            # Pasta gerada pelo build estático (deploy na Hostinger)
├── next.config.mjs                 # Configuração de build estático Next.js
├── package.json                    # Scripts e dependências
├── DEPLOY.md                       # Guia rápido de publicação
└── DOCUMENTACAO_TECNICA.md         # Esta documentação
```

---

## 3. Configuração do Git e Autenticação

### 3.1. Dados de Identidade
Configurados globalmente no ambiente:
- **Nome:** `Sidney Maximo`
- **E-mail:** `sidneyredes2013@gmail.com`
- **Usuário GitHub:** `SidneyMaximo`
- **URL do Repositório:** `https://github.com/SidneyMaximo/maximosistemas`

### 3.2. Chave SSH Configurada
A máquina utiliza autenticação por chave SSH, evitando solicitações de senha ou tokens expirados:
- **Arquivo da chave:** `~/.ssh/id_ed25519`
- **Remote configurado:** `git@github.com:SidneyMaximo/maximosistemas.git`
- **Para testar a conexão SSH a qualquer momento:**
  ```bash
  ssh -T git@github.com
  # Resposta esperada: "Hi SidneyMaximo! You've successfully authenticated..."
  ```

---

## 4. Fluxo de Publicação e Arquitetura de Branches

O projeto funciona com uma arquitetura de **duas branches**:

| Branch | Função | O que contém | Onde é usada |
|---|---|---|---|
| **`main`** | Código-fonte | TypeScript, JSX, Tailwind, configs | Histórico de desenvolvimento no GitHub |
| **`producao`** | Site compilado | `index.html`, pasta `_next`, assets | É a branch que a **Hostinger** lê e publica |

### 4.1. Por que esse modelo é vantajoso?
1. Hospedagens compartilhadas como a Hostinger não precisam de Node.js rodando em background consumindo memória.
2. O site carrega com velocidade máxima (página estática pré-renderizada).
3. O código de desenvolvimento fica protegido e separado dos arquivos de produção.

---

## 5. Procedimento Operacional: Como Fazer Alterações e Deploy

Sempre que fizer alterações no site, siga o fluxo de 3 passos:

### Passo 1: Testar localmente
No terminal do projeto:
```powershell
npm.cmd run dev
```
> 💡 **Atenção no Windows:** Utilize sempre `npm.cmd` em vez de apenas `npm` se o PowerShell reportar erro de política de execução de scripts (`PSSecurityException`).

Abra **[http://localhost:3000](http://localhost:3000)** no navegador para verificar suas alterações.

---

### Passo 2: Salvar o código no GitHub (Branch `main`)
```bash
git add .
git commit -m "Descreva aqui o que voce alterou"
git push origin main
```

---

### Passo 3: Compilar e publicar para a Hostinger (Branch `producao`)
```powershell
npm.cmd run build
npm.cmd run deploy
```

O comando `npm.cmd run deploy` utiliza a ferramenta `gh-pages` para pegar o conteúdo recém-gerado na pasta `out/` e enviar com segurança diretamente para a branch `producao`.

### Passo 4: Atualização na Hostinger
- **Se o Webhook estiver configurado:** A Hostinger detecta o push na branch `producao` e atualiza o site no ar instantaneamente.
- **Se não estiver configurado:** Acesse o painel da Hostinger > **Avançado** > **Git** > clique em **"Implantar"** (ou **"Puxar / Pull"**).

---

## 6. Solução de Problemas Comuns (Troubleshooting)

### 1. Erro: `npm.ps1 não pode ser carregado porque a execução de scripts foi desabilitada`
- **Causa:** Política de execução do PowerShell no Windows.
- **Solução:** Use o comando com `.cmd` ao final:
  ```powershell
  npm.cmd run dev
  npm.cmd run build
  npm.cmd run deploy
  ```

### 2. Erro de autenticação no Git ao dar `git push`
- **Verifique a URL do remote:**
  ```bash
  git remote -v
  ```
  Deve exibir:
  `origin  git@github.com:SidneyMaximo/maximosistemas.git`
- Se estiver com `https://`, mude para SSH rodando:
  ```bash
  git remote set-url origin git@github.com:SidneyMaximo/maximosistemas.git
  ```

### 3. O site na Hostinger não mudou após o deploy
- Verifique se a branch configurada no Git da Hostinger é **`producao`** (e não `main`).
- O diretório de instalação na Hostinger deve ser `public_html`.
- Limpe o cache do seu navegador pressionando `Ctrl + F5` no seu domínio.

---

## 7. Contatos e Configurações de Atendimento do Site

O site direciona leads através dos seguintes canais:
- **WhatsApp Oficial:** `(82) 92000-9519` (`https://wa.me/5582920009519`)
- **E-mail Comercial:** `sidney@maximosistemas.com`
- **Instagram:** `@xxsrmaximoxx` (`https://www.instagram.com/xxsrmaximoxx`)
- **Domínio Principal:** `https://maximosistemas.com`

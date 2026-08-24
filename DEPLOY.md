# 📘 Guia Prático de Deploy — MaximoSistemas

Este guia explica como funciona o fluxo de trabalho entre o seu computador, o **GitHub** e a **Hostinger**.

---

## 🎯 Conceito Principal

O seu repositório GitHub tem **duas branches**:

1. **`main`**: Guarda o seu **código de desenvolvimento** (Next.js, TypeScript, React).
2. **`producao`**: Guarda **apenas o site compilado** (o arquivo `index.html`, estilos, imagens e scripts na raiz).

A **Hostinger** só precisa ler a branch **`producao`**.

---

## 🔄 Fluxo de Atualização (Passo a Passo)

Sempre que você alterar textos, imagens ou adicionar novos projetos:

### Passo 1: Salvar as alterações de código na branch `main`
No seu terminal dentro da pasta do projeto, execute:

```bash
git add .
git commit -m "Atualizando informações do portfólio"
git push origin main
```

---

### Passo 2: Gerar o build e enviar para a branch `producao`
No mesmo terminal, execute:

```bash
npm run build
npm run deploy
```

> ✅ Esse comando executa o `gh-pages`, que pega os arquivos gerados em `out/` e envia para a branch `producao` no GitHub.

---

## 🛠️ Configuração Inicial na Hostinger (Uma única vez)

1. Acesse o **hPanel da Hostinger** ([hpanel.hostinger.com](https://hpanel.hostinger.com)).
2. No menu lateral, procure por **Avançado** > **Git**.
3. Preencha as informações:
   - **URL do Repositório:** `https://github.com/SidneyMaximo/maximosistemas.git`
   - **Branch:** `producao`
   - **Diretório de Instalação:** `public_html`
4. Clique em **Criar**.

---

## ⚡ Atualização Automática com Webhook (Opcional, Recomendado)

Para que a Hostinger atualize o site automaticamente assim que você rodar `npm run deploy`:

1. No painel **Git** da Hostinger, copie o link de **Webhook de Implantação Automática**.
2. Acesse seu repositório no GitHub: [github.com/SidneyMaximo/maximosistemas/settings/hooks](https://github.com/SidneyMaximo/maximosistemas/settings/hooks).
3. Clique em **Add webhook**:
   - **Payload URL:** Cole o link copiado da Hostinger.
   - **Content type:** `application/json`
   - **Which events would you like to trigger this webhook?:** Selecione *"Just the push event"*.
4. Clique em **Add webhook**.

Pronto! Agora qualquer `npm run deploy` atualizará a Hostinger instantaneamente.

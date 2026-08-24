#!/bin/bash
set -e

echo "Ì∫Ä Iniciando configura√ß√£o do ambiente Antigravity..."

HOOKS_DIR=".git/hooks"
if [ ! -d "$HOOKS_DIR" ]; then
  echo "‚ùå Reposit√≥rio Git n√£o encontrado. Inicialize com 'git init' primeiro."
  exit 1
fi

cat << 'HOOK_EOF' > "$HOOKS_DIR/post-merge"
#!/bin/bash
changed_files="$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD 2>/dev/null)"
if echo "$changed_files" | grep -qE "package(-lock)?\.json"; then
  echo "Ì≥¶ Altera√ß√µes em package.json detectadas ap√≥s merge/pull. Atualizando pacotes..."
  npm install
fi
HOOK_EOF

cat << 'HOOK_EOF' > "$HOOKS_DIR/post-checkout"
#!/bin/bash
if [ "$3" = "1" ]; then
  changed_files="$(git diff --name-only HEAD@{1} HEAD 2>/dev/null)"
  if echo "$changed_files" | grep -qE "package(-lock)?\.json"; then
    echo "Ì≥¶ Altera√ß√µes em package.json detectadas na troca de branch. Instalando..."
    npm install
  fi
fi
HOOK_EOF

cat << 'RUN_EOF' > run-agent.sh
#!/bin/bash
set -e

if [ ! -d "node_modules" ] || [ "package.json" -nt "node_modules" ]; then
  echo "Ì≥¶ Sincronizando depend√™ncias antes de iniciar..."
  npm install
else
  echo "‚úÖ node_modules atualizado."
fi

echo "‚ñ∂Ô∏è Executando aplica√ß√£o..."
npm start
RUN_EOF

chmod +x "$HOOKS_DIR/post-merge" "$HOOKS_DIR/post-checkout" run-agent.sh

echo "‚ú® Configura√ß√£o conclu√≠da com sucesso!"
echo "Ì±â Para iniciar seu agente sempre com verifica√ß√£o autom√°tica, execute: ./run-agent.sh"

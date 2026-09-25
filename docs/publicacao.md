# Publicação — Jornada com a Palavra

## Destino autorizado

Em 25/09/2026, José solicitou configurar DNS e publicar como os demais projetos; escolheu `https://jornadacomapalavra.com.br/`.

Padrão identificado no projeto institucional: Vercel para hospedagem e Hostinger para DNS. O site original em `daniel.lazarete.com.br` permanece independente.

## Preparação concluída

- `vercel.json`: aplicação estática, build `npm run build`, saída `dist`, sem instalação de dependências.
- Redirecionamento de `www.jornadacomapalavra.com.br` para o domínio principal preparado.
- URL canônica e metadados de compartilhamento configurados para o domínio escolhido.
- `.vercel/` ignorado pelo Git; documentação e materiais originais excluídos do upload da CLI por `.vercelignore`.
- Seis testes passaram e build gerada localmente.

## DNS observado antes da alteração

- NS: `orbit.dns-parking.com` e `horizon.dns-parking.com`.
- A do domínio principal: `2.57.91.91`.
- CNAME de `www`: `jornadacomapalavra.com.br`.
- Consultas AAAA, MX, TXT e CAA não retornaram registros nessa inspeção. Confirmar o painel antes de alterar qualquer registro.

## Em andamento

GitHub está autenticado. Vercel CLI instalada em `~/.local/share/jornada-deploy-tools/node_modules/.bin/vercel`; login iniciado e aguardando autenticação pelo usuário. Ainda não foram criados projeto ou deploy na Vercel nesta etapa. Nenhum DNS alterado.

## Próximos passos

1. Confirmar identidade e equipe da Vercel após o login.
2. Criar/vincular projeto independente e conectar `jlazarete/jornada-com-a-palavra` para deploy de `main`.
3. Publicar e conferir a aplicação pela URL da Vercel.
4. Adicionar domínio principal e `www`; obter os registros exigidos pela Vercel.
5. Aplicar somente os registros necessários no DNS da Hostinger.
6. Verificar propagação, HTTPS, redirecionamento de `www`, conteúdo e imagens em produção.

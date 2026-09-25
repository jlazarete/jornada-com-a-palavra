# Publicação — Jornada com a Palavra

## Destino autorizado

Em 25/09/2026, José solicitou publicar a versão aprovada em `https://jornadacomapalavra.com.br/`. Após a preparação inicial para Vercel, escolheu **Cloudflare Pages**. Confirmou usar o domínio sem `www` e **mover o DNS para Cloudflare**, mantendo o registro do domínio na Hostinger.

O site original em `daniel.lazarete.com.br` permanece independente. O login da Vercel foi interrompido; nenhum projeto ou deploy foi criado lá.

## Preparação concluída

- `wrangler.toml`: projeto `jornada-com-a-palavra`, saída estática `dist/`.
- Build: `npm run build`; os arquivos de publicação são HTML, CSS, JavaScript e imagens.
- `_redirects` incluído na build para redirecionar `www` ao domínio principal.
- URL canônica e metadados de compartilhamento configurados para o domínio escolhido.
- Seis testes passaram e build gerada localmente.
- Configurações de publicação da Vercel removidas.

## DNS observado antes da alteração

- NS: `orbit.dns-parking.com` e `horizon.dns-parking.com`.
- A do domínio principal: `2.57.91.91`.
- CNAME de `www`: `jornadacomapalavra.com.br`.
- Consultas AAAA, MX, TXT e CAA não retornaram registros nessa inspeção. Conferir a zona no painel e preservar registros de outros serviços antes da troca.

## Em andamento

Wrangler instalado em `~/.local/share/jornada-cloudflare-tools/node_modules/.bin/wrangler`; autenticação iniciada, ainda sem confirmação. Nenhum deploy ou alteração de DNS concluído.

## Próximos passos

1. Confirmar autenticação e conta da Cloudflare.
2. Verificar se a zona `jornadacomapalavra.com.br` e o projeto já existem.
3. Configurar projeto Pages e publicação de `dist/`; definir integração GitHub para atualizações de `main` antes de optar por Direct Upload (o tipo do projeto tem limitações de migração).
4. Adicionar/conferir a zona na Cloudflare e obter os nameservers específicos atribuídos à conta.
5. Atualizar os nameservers na Hostinger e conferir ativação da zona.
6. Associar domínio principal e `www` ao projeto Pages.
7. Conferir HTTPS, redirecionamento, imagens, navegação e persistência em produção.

Referência: https://developers.cloudflare.com/pages/configuration/custom-domains/

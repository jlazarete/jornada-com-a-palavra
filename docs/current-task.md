# Tarefa atual

Atualizado em 25/09/2026.

## Objetivo

Publicar a versão aprovada em `jornadacomapalavra.com.br`, com hospedagem na Vercel e DNS na Hostinger. A solicitação de publicação passa a ser a prioridade; melhorias de navegação ficam para depois.

## Concluído

- Plano existente lido e preservado.
- Criados os arquivos de instruções, continuidade, decisões e registro da migração.
- Git local inicializado na branch `main`.
- GitHub CLI instalado em `~/.local/bin/gh`, com checksum verificado, e autenticado como `jlazarete`.
- Repositório `jlazarete/jornada-com-a-palavra` criado, visibilidade `PRIVATE` verificada e remoto `origin` configurado.
- Recuperada a versão 2 do Sites e documentada sua procedência.
- Preservados o conteúdo dos 21 dias, a capa e a imagem original de oração; HTML, CSS e JavaScript separados para edição.
- Corrigidas falhas com armazenamento bloqueado/corrompido e perda de foco após atualizações.
- Build estática e seis testes automatizados passaram. Verificação em Chrome passou em desktop e celular; detalhes em `verificacao-migracao.md`.
- José aprovou o visual da migração e autorizou seguir com créditos e imagens.
- Identidade Jornada com a Palavra no topo e metadados; créditos de José Lazarete e da Lazarete Automações no rodapé.
- Ilustrações aplicadas nos dias 5 (fornalha), 13 (leões) e 19 (oração/visão), inteiras e com textos alternativos. Capa preservada. Imagem com legenda em inglês reservada.
- Build, seis testes existentes e conferência das imagens em desktop/celular passaram.
- A pedido de José, três imagens foram harmonizadas com a capa e a imagem original de oração usando `image_gen`; arquivos e prompts em `imagens.md`.
- Adicionados links diretos `#dia-5`, `#dia-13` e `#dia-19`; servidor local sem cache para facilitar a conferência. O usuário confirmou que acessa localhost; o servidor retornava as imagens anteriores corretamente, sem evidência de falha no carregamento.

## Próximos passos

Prioridade atual: concluir login na Vercel, deploy e DNS conforme `publicacao.md`. Configuração local preparada e validada; nenhuma publicação ou alteração de DNS realizada nesta etapa.

Backlog após publicação:

1. Revisar com José os créditos e as ilustrações na aplicação local (http://127.0.0.1:5173).
2. Implementar a entrada Começar/Continuar prevista no plano.
3. Revisar editorialmente referências, reflexões e orações; verificar abertura externa dos links bíblicos.
4. Preparar compartilhamento discreto e revisão de acessibilidade previstos no plano.
5. Confirmar direitos das imagens e hospedagem antes de publicar a versão independente.

## Critério de conclusão da próxima etapa

Créditos e imagens revisados por José, e entrada Começar/Continuar verificada. A aplicação já funciona localmente; a versão independente ainda não foi publicada.

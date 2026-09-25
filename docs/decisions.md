# Decisões

## Confirmadas

- **Plano inicial:** iniciativa Jornada com a Palavra; primeira entrega Daniel em 21 dias, com espaço para jornadas futuras.
- **Plano inicial:** novo repositório independente, mantendo o site de origem no ar durante a migração.
- **25/09/2026 — solicitação de José:** iniciar a base do projeto e criar repositório privado.
- **25/09/2026 — execução verificada:** repositório `jlazarete/jornada-com-a-palavra` criado no GitHub com visibilidade privada e conectado como `origin`.
- **Plano inicial:** preservar capa e experiência aprovada; recuperar e inspecionar a fonte antes de escolher a stack.
- **Plano inicial:** primeira versão sem login, sincronização ou analytics; progresso e horário persistidos localmente no navegador.
- **25/09/2026 — inspeção da origem:** preservada a stack HTML/CSS/JavaScript puro. Não há framework, dependências ou gerenciador original a migrar; npm fornece apenas atalhos opcionais para desenvolvimento, testes e cópia da build.
- **25/09/2026 — organização da fonte:** conteúdo extraído para `src/content/daniel-21-dias.js`, estilos e comportamento separados em módulos. Os 21 registros e as duas imagens foram comparados com a origem e preservados.
- **25/09/2026 — robustez:** mantidas as chaves `daniel21-*`; valores inválidos são descartados e falhas do armazenamento permitem uso em memória, com aviso na interface. Foco por teclado é preservado após atualizações.

- **25/09/2026 — após aprovação visual de José:** aplicados créditos discretos e três ilustrações nos dias 5, 13 e 19. Preservados a capa, o roteiro e o restante do visual. A imagem com legenda em inglês fica reservada para revisão.

- **25/09/2026 — pedido de José:** harmonizar as três ilustrações com as duas originais. Novos PNGs `-v2` gerados pela ferramenta integrada, mantendo os originais. Links de dia e prévia sem cache ajudam a localizar e conferir as imagens; nenhuma mudança no site de produção.

## Pendências

- Tradução bíblica e direitos de reprodução.
- Concluir autenticação da Cloudflare, projeto Pages e migração do DNS.
- Revisão editorial das reflexões. Links originais usam YouVersion/NVI; não há transcrição integral de tradução bíblica.

## Publicação autorizada em 25/09/2026

José solicitou colocar no ar e definiu `jornadacomapalavra.com.br` como domínio. Seguir o padrão dos demais projetos (Vercel + DNS Hostinger), substituindo a sugestão inicial de hospedar na Hostinger. Publicar a versão já aprovada; a entrada Começar/Continuar e outros aprimoramentos ficam no backlog. Manter o site original em `daniel.lazarete.com.br`.

### Revisão posterior na mesma sessão

José substituiu Vercel por Cloudflare. Após esclarecer a exigência de zona Cloudflare para usar o domínio principal no Pages, confirmou **hospedagem e DNS na Cloudflare**, com `jornadacomapalavra.com.br` sem `www`. O registro permanece na Hostinger. A decisão acima de Vercel + DNS Hostinger foi substituída.

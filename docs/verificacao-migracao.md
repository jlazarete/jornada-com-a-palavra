# Verificação da migração — 25/09/2026

## Origem e integridade

- Commit recuperado: `ff5c2bdc149a1ed89af0853d4062cd5e33e672b5`, correspondente à versão 2 do Sites.
- Comparação dos 21 registros com o array original: iguais, incluindo títulos, referências, reflexões e orações.
- Comparação binária das duas imagens originais: iguais.
- Site de origem respondeu HTTP 200 em `https://daniel.lazarete.com.br`.

## Testes automatizados

`npm test`: seis testes passaram, cobrindo restauração do estado, valores inválidos/duplicados, JSON malformado, armazenamento bloqueado/falha de escrita, jornada completa e integridade sequencial das leituras.

`npm run build`: concluído. A pasta `dist/` contém somente `index.html`, `src/` e `public/`; documentação, testes, Git e imagens adicionais não são publicados.

## Navegador

Verificação automatizada com Playwright temporário e Chrome já instalado, contra a build servida em localhost. Nenhuma dependência de navegador foi adicionada à aplicação.

- 21 botões de dias e três semanas renderizados.
- Todos os dias selecionáveis, incluindo meditação em 6, 7 e 14 sem link de passagem.
- Marcar/desmarcar conclusão atualiza contador e barra.
- Dia ativo, conclusão e período persistem após recarregar.
- Enter seleciona o dia; Espaço ativa conclusão; foco é preservado após renderizar.
- No celular, selecionar um dia leva o foco ao detalhe.
- Sem rolagem horizontal em larguras de 320 e 390 pixels.
- Dia salvo inválido e conclusão duplicada/fora da faixa são recuperados sem quebrar a página.
- Com acesso ao armazenamento bloqueado, aplicação funciona em memória e mostra aviso.
- Sem erros JavaScript ou respostas HTTP de erro nos recursos locais.
- Capturas desktop (1440 pixels) e celular (390 pixels) inspecionadas visualmente.

## Limites desta etapa

Ainda faltam a revisão editorial das reflexões e orações, verificação externa de cada link bíblico, auditoria completa de contraste/leitores de tela, seleção das imagens adicionais e revisão com José. A passagem de progresso entre domínios não é automática. Nenhuma publicação ou alteração no site original foi feita.

## Créditos e ilustrações — 25/09/2026

Após a aprovação visual, a build e os seis testes existentes passaram novamente. Chrome/Playwright confirmou créditos, carregamento das três imagens nos dias 5, 13 e 19, retorno à imagem original no dia 1, textos alternativos e proporção integral das ilustrações. Layout sem rolagem horizontal em 320 e 390 pixels; capturas desktop e celular inspecionadas. Nenhum erro JavaScript observado. As imagens selecionadas foram copiadas sem edição; a capa original permanece intacta.

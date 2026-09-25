# Migração do Sites

## Origem informada no plano

- Projeto: Daniel em 21 dias.
- ID: `appgprj_6ab67e9f6b688191a28e6723ec1b523a`.
- Endereço: https://jornada-daniel-21-dias.joselazarete.chatgpt.site/

## Recuperação em 25/09/2026

O conector Sites confirmou o projeto e disponibilizou acesso temporário ao repositório. O clone foi feito fora deste repositório, sem registrar credenciais. O commit recuperado corresponde à versão 2: `ff5c2bdc149a1ed89af0853d4062cd5e33e672b5`.

O endereço de produção informado pelo Sites é https://daniel.lazarete.com.br . O projeto de origem está público. Nenhuma configuração, fonte ou publicação do Sites foi alterada.

## Inventário recuperado

| Origem | Destino | Tratamento |
| --- | --- | --- |
| `dist/index.html` | `index.html`, `src/app.js`, `src/progress.js`, `src/content/daniel-21-dias.js`, `src/styles/main.css` | Separação do HTML, CSS, dados e comportamento para edição. |
| `dist/images/babilonia-amanhecer.webp` | `public/images/babilonia-amanhecer.webp` | Capa preservada byte a byte. |
| `dist/images/daniel-em-oracao.webp` | `public/images/daniel-em-oracao.webp` | Imagem dos detalhes preservada byte a byte. |
| `.openai/hosting.json` e `site-release.tar.gz` | Não importados | Metadados e pacote de publicação do site original não fazem parte da nova aplicação. |

Não foi necessário reconstruir conteúdo ou layout. A fonte é HTML/CSS/JavaScript puro, com fontes do sistema e favicon SVG embutido; não existem dependências de execução ou lockfile original.

Os 21 registros (referência, título, reflexão e oração) foram comparados integralmente com a fonte. Dias de meditação: 6, 7 e 14. As demais leituras cobrem Daniel 1–12. Links preservados para YouVersion/NVI, sem texto bíblico integral incorporado. Revisão editorial e verificação externa dos links ainda pendentes.

## Persistência e correções

- `daniel21-done`: array JSON de números de dias concluídos.
- `daniel21-active`: número do dia selecionado.
- `daniel21-period`: `manha`, `noite` ou vazio.
- Leituras e escritas agora toleram bloqueio do navegador; dados inválidos ou repetidos são filtrados.
- Sem dia válido salvo, retoma o primeiro dia incompleto; com todos concluídos, seleciona o dia 21.
- A interface conserva o foco após marcar/desmarcar um dia; no celular, a seleção direciona o foco ao detalhe.
- O rodapé explica que trocar de aparelho/endereço ou limpar dados pode perder o progresso.

A persistência no endereço antigo não transfere automaticamente para outro domínio.

## Imagens adicionais

As quatro imagens em `Img/` foram fornecidas por José e inspecionadas; todas são JPEG, 1408 × 768. Os originais permanecem em `Img/`; após autorização de José, três cópias foram incluídas na aplicação:

- Sem sufixo: composição de oração e figura angelical; aplicada no dia 19 como representação artística (`oracao-e-visao.jpeg`).
- `(1)`: Daniel entre leões; aplicada no dia 13 (`daniel-na-cova-dos-leoes.jpeg`).
- `(2)`: cena da fornalha; aplicada no dia 5 como representação artística (`fornalha-ardente.jpeg`).
- `(3)`: recusa dos alimentos da corte; contém legenda em inglês e composição que merece revisão antes do uso.

As imagens recuperadas não vieram acompanhadas de declaração de licença. Confirmar direitos de uso antes da publicação independente. A revisão visual não certifica precisão histórica ou teológica das representações.

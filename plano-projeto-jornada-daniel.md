# Plano de projeto — Jornada com a Palavra

**Responsável:** José Lazarete Júnior, da Lazarete Automações  
**Primeira jornada:** Daniel em 21 dias  
**Objetivo:** usar conhecimentos de tecnologia para facilitar a leitura bíblica, a oração e a comunhão, com Jesus Cristo no centro. O projeto pode receber outras jornadas no futuro.

## Direção do projeto

Apresentar a iniciativa como um trabalho de José Lazarete, que também atua na Lazarete Automações. A marca comercial pode aparecer discretamente nos créditos, sem transformar a jornada em uma página de vendas. Usar linguagem acolhedora, reverente e fiel ao texto bíblico. O site ajuda na organização pessoal; não substitui a leitura integral da Bíblia nem o acompanhamento da comunidade de fé.

**Primeiro público:** José e irmãos convidados. **Primeira entrega:** jornada de Daniel que já funciona no Sites. **Princípio:** começar pequeno e permitir expansão sem ter de refazer o projeto.

## Três domínios para consultar

| Prioridade | Domínio sugerido | Por quê |
| --- | --- | --- |
| 1 | `jornadacomapalavra.com.br` | Claro, fácil de explicar e serve para outras leituras além de Daniel. |
| 2 | `feejornada.com.br` | Curto e memorável, com espaço para novas iniciativas. |
| 3 | `caminhodapalavra.com.br` | Identidade cristã e nome amplo para conteúdos futuros. |

**Antes de pagar:** consultar a disponibilidade e possíveis marcas semelhantes no Registro.br e testar a leitura do nome em voz alta. Resultado de busca na web não comprova disponibilidade. Não comprar até escolhermos o nome final e conferirmos o registro. Se o projeto ficar restrito a poucos irmãos por enquanto, podemos desenvolver e testar sem comprar domínio.

## Reaproveitamento do projeto existente

Projeto de origem: **Daniel em 21 dias**, ID `appgprj_6ab67e9f6b688191a28e6723ec1b523a`. URL atual: https://jornada-daniel-21-dias.joselazarete.chatgpt.site/ . A versão existente contém 21 dias divididos em três semanas, passagens, reflexões, orações, imagens, preferência de horário e progresso salvo no navegador.

1. Abrir o repositório de origem associado ao Sites e obter uma cópia local do código e dos recursos, respeitando a estrutura e as licenças dos arquivos. Se a exportação direta não estiver disponível, reconstruir os componentes a partir da experiência atual e dos textos do roteiro, documentando o que foi recuperado.
2. Criar um repositório Git **novo** para a iniciativa e trabalhar nele pelo VS Code. Manter o site de origem no ar como referência durante a migração; não publicar uma cópia com o mesmo endereço.
3. Inventariar arquivos, dependências, fontes, imagens, conteúdo diário e funcionamento de `localStorage`. Preservar o layout aprovado, inclusive a imagem atual da capa; conferir direitos de uso das outras imagens antes de publicar fora do Sites.
4. Extrair os 21 dias para dados editáveis (`src/content/daniel-21-dias.ts` ou equivalente). Conferir cada referência bíblica, tema de oração, dia de meditação e ordem de navegação. As passagens podem ser acessadas por links; para transcrever o texto integral, escolher uma tradução e verificar a licença.
5. Implementar e testar: seleção do dia, progresso, persistência local, escolha manhã/noite, navegação por teclado, layout móvel, contraste e imagens com texto alternativo. Explicar na interface que o progresso fica neste navegador e pode se perder ao trocar de aparelho ou endereço.
6. Ajustar título, descrição, favicon, URL de compartilhamento e créditos. Preparar uma política de privacidade simples somente se houver coleta de dados; sem contas e sem analytics no primeiro lançamento, evitar coletar dados pessoais.

## Escopo da primeira versão

- Página inicial com propósito da jornada e botão **Começar/Continuar**.
- Calendário dos 21 dias em três semanas, com a passagem, breve reflexão e tema de oração.
- Marcação de dias concluídos e preferência de horário salvas apenas no aparelho.
- Dois dias de meditação na primeira semana e um na segunda, conforme roteiro original.
- Convite discreto para compartilhar o link com outros irmãos.
- Identificação: “Uma iniciativa de José Lazarete, da Lazarete Automações”, sujeita ao ajuste de texto que José preferir.

**Deixar para depois:** login, sincronização entre aparelhos, notificações, cadastro de participantes, área administrativa, arrecadação, comentários e novas jornadas. Um contador de dias não deve bloquear quem entrou depois do início do jejum.

## Estrutura sugerida no VS Code

```text
jornada-com-a-palavra/
├── README.md
├── AGENTS.md
├── docs/
│   ├── current-task.md
│   ├── decisions.md
│   └── migracao-sites.md
├── public/
│   └── imagens/
└── src/
    ├── content/
    ├── components/
    └── styles/
```

**Decisão técnica inicial:** identificar o framework e o gerenciador de pacotes do código original antes de escolher a stack. Se o código puder ser usado diretamente, preservá-los. Se exigir reconstrução, uma aplicação estática com Vite, React e TypeScript é suficiente para a primeira versão e pode ser publicada na Hostinger sem banco de dados. Guardar em `docs/decisions.md` a escolha feita e a razão.

## Etapas de trabalho

| Etapa | Entrega verificável |
| --- | --- |
| 1. Recuperação | Código e imagens do projeto atual abertos no VS Code; inventário de conteúdo e licenças. |
| 2. Migração | Nova base Git com os 21 dias funcionando localmente, mantendo a identidade visual aprovada. |
| 3. Revisão | Textos, referências, acessibilidade e comportamento em celular conferidos. |
| 4. Pré-publicação | Teste com José e poucos irmãos; correções de clareza e navegação. |
| 5. Publicação | Domínio escolhido apontando para a Hostinger, HTTPS ativo e jornada acessível ao público desejado. |

**Critérios para publicar:** todos os 21 dias corretos; capa e imagens carregando; progresso persistindo após recarregar; navegação funcional em celular; links bíblicos abrindo; título e descrição adequados; nenhuma chave ou dado privado no repositório. Se o site for aberto ao público, remover qualquer bloqueio de acesso intencional; se for apenas por convite, decidir conscientemente sobre indexação e compartilhamento.

## Primeira sessão de trabalho no VS Code

1. Criar a pasta e o novo repositório Git.
2. Recuperar a fonte do projeto Sites e registrar em `docs/migracao-sites.md` o que foi importado e o que precisou ser recriado.
3. Executar o projeto localmente e capturar a lista de ajustes necessários.
4. Mover os dados dos 21 dias para um arquivo de conteúdo editável.
5. Definir o primeiro ajuste visual com base na página já aprovada, sem redesenhar a capa.

**Prompt de início para o assistente no VS Code:**

> Vamos migrar o projeto “Daniel em 21 dias” do Sites para um repositório independente. Leia `AGENTS.md`, `docs/current-task.md`, `docs/decisions.md` e `docs/migracao-sites.md`. Inspecione a estrutura existente antes de alterar a stack. Preserve a capa e a experiência dos 21 dias; implemente apenas a próxima tarefa registrada em `docs/current-task.md` e explique como verificar localmente.

## Decisões pendentes, sem bloquear o início

- Nome definitivo da iniciativa e disponibilidade do domínio.
- Tradução bíblica usada nos links e eventual licença para transcrição.
- Se a primeira divulgação será por convite ou pública.
- Hospedagem final: Hostinger, aproveitando a conta existente, após confirmar que o plano contratado suporta a build escolhida.


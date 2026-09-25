# Jornada com a Palavra

Iniciativa de José Lazarete para facilitar leitura bíblica, oração e comunhão. Primeira jornada: **Daniel em 21 dias**.

## Estado atual

Aplicação estática recuperada da versão 2 do Sites: HTML, CSS e JavaScript, sem dependências de execução. Os 21 dias, a capa e a imagem de oração foram preservados. Progresso e horário ficam apenas no navegador; não há contas ou analytics.

## Executar localmente

Com Python 3, na raiz do projeto:

```sh
python3 -m http.server 5173 --bind 127.0.0.1
```

Abra http://127.0.0.1:5173 . Use o servidor HTTP, pois o JavaScript usa módulos.

Com Node.js 20 ou superior e npm, os atalhos também estão disponíveis, sem precisar executar `npm install`:

```sh
npm run dev
npm test
npm run build
```

O comando de desenvolvimento também requer Python 3. A build copia somente a aplicação para `dist/`, pronta para hospedagem estática. Para conferir a build, execute `python3 -m http.server 5173 --bind 127.0.0.1 --directory dist`.

## Editar

- `src/content/daniel-21-dias.js`: roteiro original dos 21 dias e nomes das semanas.
- `src/app.js`: apresentação e navegação.
- `src/progress.js`: validação e persistência do progresso.
- `src/styles/main.css`: estilos originais.
- `public/images/`: imagens usadas na aplicação.
- `Img/`: imagens adicionais fornecidas por José, ainda fora da aplicação.

O progresso do site de origem não é transferido automaticamente para localhost ou outro domínio.

## Documentação

- `plano-projeto-jornada-daniel.md`: plano e escopo inicial.
- `AGENTS.md`: instruções de trabalho.
- `docs/current-task.md`: andamento e próxima tarefa.
- `docs/decisions.md`: decisões confirmadas e pendências.
- `docs/migracao-sites.md`: origem e inventário da migração.

Repositório privado: https://github.com/jlazarete/jornada-com-a-palavra . A migração é local; o site de origem permanece como referência.

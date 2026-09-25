# Jornada com a Palavra

Iniciativa de José Lazarete para facilitar leitura bíblica, oração e comunhão. Primeira jornada: **Daniel em 21 dias**.

## Estado atual

Aplicação estática recuperada da versão 2 do Sites: HTML, CSS e JavaScript, sem dependências de execução. Os 21 dias, a capa e a imagem de oração foram preservados. Progresso e horário ficam apenas no navegador; não há contas ou analytics.

## Executar localmente

Com Python 3, na raiz do projeto:

```sh
python3 scripts/serve.py
```

Abra http://127.0.0.1:5173 . A prévia usa `Cache-Control: no-store` para não manter versões antigas dos arquivos. Use o servidor HTTP, pois o JavaScript usa módulos.

Para ver as cenas diretamente: [fornalha — dia 5](http://127.0.0.1:5173/#dia-5), [leões — dia 13](http://127.0.0.1:5173/#dia-13) e [oração/visão — dia 19](http://127.0.0.1:5173/#dia-19). Os demais dias mantêm a imagem original de oração.

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
- `src/content/day-images.js`: imagens por dia e textos alternativos.
- `Img/`: originais fornecidos por José; três foram copiados para `public/images/` e usados nos dias 5, 13 e 19.

O progresso do site de origem não é transferido automaticamente para localhost ou outro domínio.

## Documentação

- `plano-projeto-jornada-daniel.md`: plano e escopo inicial.
- `AGENTS.md`: instruções de trabalho.
- `docs/current-task.md`: andamento e próxima tarefa.
- `docs/decisions.md`: decisões confirmadas e pendências.
- `docs/migracao-sites.md`: origem e inventário da migração.
- `docs/imagens.md`: arquivos e prompts das ilustrações harmonizadas.

Repositório privado: https://github.com/jlazarete/jornada-com-a-palavra . A migração é local; o site de origem permanece como referência.

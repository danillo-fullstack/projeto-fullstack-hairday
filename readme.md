# Hairday — Agendamentos (Frontend)

Aplicação web de agendamento de serviços (corte de cabelo) desenvolvida como projeto fullstack. O frontend foi construído com JavaScript moderno, bundling com Webpack e uma API fake via json-server para facilitar testes locais.

O objetivo deste projeto é demonstrar habilidades práticas no frontend: arquitetura de código organizada por módulos, comunicação com API, tratamento de datas com Day.js, manipulação do DOM e criação e cancelamento de agendamentos.

## Tecnologias

- JavaScript (ESModules)
- Webpack
- Day.js
- json-server (para API local)
- Babel (transpiling)

## Estrutura do projeto

Arquivos principais:

- `index.html` — entrada HTML.
- `src/main.js` — entrypoint do app.
- `src/modules/` — módulos do frontend (schedules, form, etc.).
- `src/services/` — chamadas à API (fetch) e configuração.
- `src/styles/` — CSS.
- `server.json` — banco de dados para o `json-server`.
- `webpack.config.js` — configuração do bundler.

## Scripts úteis

Os scripts no `package.json` já configurados:

- `npm run dev` — inicializa o Webpack Dev Server (modo desenvolvimento).
- `npm run build` — gera os arquivos de produção via Webpack.
- `npm run server` — inicia o `json-server` na porta `3333` usando `server.json`.

Exemplo de fluxo de desenvolvimento (Windows PowerShell):

```powershell
npm install
npm run server    # executa json-server em http://localhost:3333
npm run dev       # executa o frontend (webpack dev server)
```

Observação: o `server.json` contém exemplos de agendamentos para testes locais.

## Contato

Autor: Danillo Victtor

---

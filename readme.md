# Podcast Manager API

API desenvolvida em TypeScript utilizando apenas recursos nativos do Node.js, sem utilização de frameworks externos como Express.

O projeto permite listar e filtrar episódios de podcasts através de rotas HTTP.

---

# Tecnologias Utilizadas

- TypeScript
- Node.js
- TSX
- TSUP
- HTTP Module
- File System (FS)

---

# Funcionalidades

- Listar episódios de podcasts
- Filtrar podcasts pelo nome
- Gerar automaticamente o link do YouTube através do `videoId`
- Organização em camadas:
  - Controllers
  - Services
  - Repositories
  - Models
  - Routes
  - Utils

---

# Estrutura do Projeto

```bash
src/
├── controllers/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── app.ts
└── server.ts
´´´ 


# Instalação
npm init –y

npm i typescript tsx tsup –D

npx tsc --init

npm run start:dev


# Rotas da API
# Listar todos os episódios
GET /api/list

Exemplo:

http://localhost:3333/api/list
-Filtrar episódios por podcast
-GET /api/podcasts?p=flow

Exemplo:

http://localhost:3333/api/podcasts?p=flow
-Exemplo de Resposta
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "youtubeLink": "https://youtube.com/watch?v=pQSuQmUfS30",
    "categories": [
      "saúde",
      "esporte",
      "bodybuilder"
    ]
  }
]
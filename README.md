# Palpiteiro-API

Uma API simples para palpites dos jogos da copa.

## Documentação API

``
  GET /games
``
##### Retorna todos os jogos abertos para palpites

| Parâmetros | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | ID do jogo |
| `teamOne` | `string` | Nome da seleção mandante|
| `teamTwo` | `string` | Nome da seleção visitante |
| `type` | `string` | Tipo do jogo (Fase de grupos, quartas de final, etc) |

Retorno esperado: 200

``
  GET /guesses
``

##### Retorna todos os palpites abertos na plataforma

| Parâmetros | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `guessesId` | `number` | ID do palpite |
| `name` | `string` | Nome do usuário que realizou o palpite |
| `scoreboardTeamOne` | `number` | Gols marcados pela equipe um |
| `scoreboardTeamTwo` | `number` | Gols marcados pela equipe dois |
| `winnerTeam` | `string` | Palpite de qual seleção vencerá a partida (Podendo ser 'Empate') |
| `gamesId` | `number` | ID do jogo |
| `teamOne` | `string` | Nome da seleção mandante|
| `teamTwo` | `string` | Nome da seleção visitante |
| `type` | `string` | Tipo do jogo (Fase de grupos, quartas de final, etc) |

Retorno esperado: 200

``
  GET /guesses/:name
``
##### Retorna todos os palpites feitos por aquele usuário

| Parâmetros | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | ID do palpite |
| `name` | `string` | Nome do usuário que realizou o palpite |
| `scoreboardTeamOne` | `number` | Gols marcados pela equipe um |
| `scoreboardTeamTwo` | `number` | Gols marcados pela equipe dois |
| `winnerTeam` | `string` | Palpite de qual seleção vencerá a partida (Podendo ser 'Empate') |
| `gamesId` | `number` | ID do jogo |
| `guessesRight` | `boolean` | 'False' se o usuário errou aquele palpite e 'true' se acertou |
| `createdAt` | `data` | Data da criação do palpite na plataforma |

Retorno esperado: 200

``
  GET /ranking
``
##### Retorna um ranking de usuários com mais palpites acertados

| Parâmetros | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Name` | `string` | Nome do usuário |
| `NumbersOfHits` | `number` | Número de acertos nos palpites |

Retorno esperado: 200

``
  POST /guesses
``
##### Adciona um palpite na plataforma

| Parâmetros | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | Nome do usuário que irá realizar o palpite |
| `scoreboardTeamOne` | `number` | Gols marcados pela equipe um (Parâmetro Opcional) |
| `scoreboardTeamTwo` | `number` | Gols marcados pela equipe dois (Parâmetro Opcional) |
| `winnerTeam` | `string` | Palpite de qual seleção vencerá a partida (Podendo ser 'Empate') |
| `gamesId` | `number` | ID do jogo que queremos adicionar um palpite |

Retorno esperado: 201

``
  DELETE /guesses/:id
``
##### Remove um palpite da plataforma

Retorno esperado: 204

``
  PUT /games/:id
``
##### Atualizar o status de um palpite para fechado e atualizar todos os ganhadores

Retorno esperado: 200

## Como rodar o projeto

1. Clone o repositório
2. instale as dependências
```bash
npm i
```
3. Criei um banco local postgres usando o arquivo `dump.sql`
4. Iniciei a aplicação como administrador
```bash
npm run dev

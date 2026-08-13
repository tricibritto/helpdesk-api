# HelpDesk API

## Nome do sistema

**HelpDesk API**

## Objetivo do projeto

Desenvolver uma API REST para facilitar o gerenciamento de chamados de suporte, permitindo o cadastro, consulta, atualização e exclusão de informações relacionadas aos chamados por meio de uma aplicação integrada ao banco de dados MySQL.

## Descrição da aplicação

A HelpDesk API é uma aplicação desenvolvida para o gerenciamento de chamados de suporte. O sistema permite organizar informações relacionadas aos chamados, como título, descrição, setor solicitante, prioridade e status.

A aplicação utiliza uma API REST desenvolvida com Node.js e Express, integrada ao banco de dados MySQL para armazenamento e gerenciamento das informações.

## Tecnologias utilizadas

* Node.js
* Express
* JavaScript
* MySQL
* MySQL2
* CORS
* Git
* GitHub

## Estrutura das pastas

```text
helpdesk-api/
├── controllers/
│   └── chamadoController.js
├── database/
│   └── db.js
├── routes/
│   └── chamadoRoutes.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

### Descrição das principais pastas e arquivos

**controllers/**
Contém a lógica responsável pelas operações realizadas nos chamados.

**database/**
Contém a configuração da conexão da aplicação com o banco de dados MySQL.

**routes/**
Contém as rotas responsáveis por disponibilizar os endpoints da API.

**server.js**
Arquivo principal responsável pela inicialização do servidor e configuração da aplicação.

**package.json**
Contém as informações do projeto, scripts e dependências utilizadas.

## Como instalar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/tricibritto/helpdesk-api.git
```

### 2. Entrar na pasta do projeto

```bash
cd helpdesk-api
```

### 3. Instalar as dependências

```bash
npm install
```

## Como executar a API

Após instalar as dependências, execute:

```bash
npm start
```

A aplicação será iniciada utilizando o arquivo `server.js`.

Por padrão, a API será executada em:

```text
http://localhost:3000
```

Para verificar se a API está funcionando, acesse:

```text
http://localhost:3000
```

## Endpoints disponíveis

### Verificar funcionamento da API

```http
GET /
```

Retorna uma mensagem informando que a API está funcionando.

### Listar chamados

```http
GET /api/chamados
```

Retorna todos os chamados cadastrados no banco de dados.

### Buscar chamado por ID

```http
GET /api/chamados/:id
```

Retorna um chamado específico de acordo com o ID informado.

Exemplo:

```text
GET /api/chamados/1
```

### Cadastrar chamado

```http
POST /api/chamados
```

Permite cadastrar um novo chamado.

Exemplo de requisição:

```json
{
  "titulo": "Problema no computador",
  "descricao": "Computador não está iniciando corretamente.",
  "setor_solicitante": "Administrativo",
  "prioridade": "Alta",
  "status": "Aberto"
}
```

### Atualizar chamado

```http
PUT /api/chamados/:id
```

Permite atualizar os dados de um chamado existente.

Exemplo:

```text
PUT /api/chamados/1
```

### Excluir chamado

```http
DELETE /api/chamados/:id
```

Permite excluir um chamado existente de acordo com o ID informado.

Exemplo:

```text
DELETE /api/chamados/1
```

## Dados dos chamados

Os chamados possuem as seguintes informações:

| Campo               | Descrição                            |
| ------------------- | ------------------------------------ |
| `id`                | Identificador único do chamado       |
| `titulo`            | Título do chamado                    |
| `descricao`         | Descrição do problema ou solicitação |
| `setor_solicitante` | Setor responsável pela solicitação   |
| `prioridade`        | Prioridade do chamado                |
| `status`            | Status atual do chamado              |

## Banco de dados

A aplicação utiliza o **MySQL** para armazenamento dos chamados.

A conexão com o banco de dados é realizada pela aplicação por meio do arquivo:

```text
database/db.js
```

A tabela utilizada para armazenar os chamados contém os campos:

```text
id
titulo
descricao
setor_solicitante
prioridade
status
```

## Integrantes da equipe

* **Trícia Britto**
* **Winie de Jesus**

## Instituição de ensino

**SENAI Candeias**

## Professor Orientador

**Adalberto Santana**

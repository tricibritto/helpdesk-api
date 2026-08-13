# HelpDesk API

## Nome do sistema

**HelpDesk API**

## Objetivo do projeto

Desenvolver uma API REST para facilitar o gerenciamento de chamados de suporte, permitindo o cadastro, consulta, atualização e exclusão de informações relacionadas aos chamados por meio de uma aplicação integrada ao banco de dados MySQL.

## Descrição da aplicação

A HelpDesk API é uma aplicação desenvolvida para o gerenciamento de chamados de suporte. O sistema permite organizar informações relacionadas aos chamados, como título, descrição, setor solicitante, prioridade e status.

A aplicação utiliza uma API REST para realizar operações de gerenciamento dos chamados e possui integração com um banco de dados MySQL.

## Tecnologias utilizadas

* Node.js
* Express
* JavaScript
* MySQL
* MySQL2
* Git
* GitHub

## Estrutura das pastas

```text
helpdesk-api/
├── .gitignore
├── package.json
├── package-lock.json
├── index.js
└── demais arquivos da aplicação
```

> A estrutura deverá ser atualizada de acordo com os arquivos e pastas existentes no projeto.

## Como instalar o projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
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

Para iniciar a aplicação, execute:

```bash
npm start
```

A API será executada na porta configurada no projeto.

## Endpoints disponíveis

### Listar chamados

```http
GET /ROTA
```

Retorna os chamados cadastrados.

### Consultar chamado

```http
GET /ROTA/:id
```

Retorna um chamado específico.

### Cadastrar chamado

```http
POST /ROTA
```

Cadastra um novo chamado.

### Atualizar chamado

```http
PUT /ROTA/:id
```

Atualiza um chamado existente.

### Excluir chamado

```http
DELETE /ROTA/:id
```

Exclui um chamado existente.

> As rotas acima deverão ser substituídas pelas rotas exatamente utilizadas no código da aplicação.

## Banco de dados

A aplicação utiliza o banco de dados MySQL para armazenar os chamados.

A tabela utilizada possui informações relacionadas aos chamados, incluindo:

* ID
* Título
* Descrição
* Setor solicitante
* Prioridade
* Status

## Integrantes da equipe

* Trícia Britto
* Winie de Jesus

## Instituição de ensino

**SENAI Candeias**

## Professor Orientador

**Adalberto Santana**
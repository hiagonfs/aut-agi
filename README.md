# Automação de Casos no Site do Agi Bank
Este projeto tem como objetivo automatizar casos de testes no site do Agi Bank. Utilizamos o framework Cypress para desenvolver as soluções de automação e assim garantir que os processos e funcionalidades do site estejam funcionando corretamente.

## Requisitos
Antes de começar a utilizar o projeto, certifique-se de que possui as seguintes ferramentas e recursos instalados:

- Node.js (v14+)
- Cypress (v7+)
- Git

## Como utilizar
1. Clone este repositório em sua máquina utilizando o comando git clone https://github.com/hiagonfs/aut-agi.git
2. Instale as dependências do projeto com o comando npm install
3. Execute o Cypress com o comando npm run cypress:open
4 Selecione o arquivo de teste que deseja executar na interface do Cypress

## Estrutura do Projeto

O projeto está organizado da seguinte forma:
```
├── cypress
│   ├── fixtures
│   │   ├── exemplo.json
│   ├── integration
│   │   ├── nome-do-teste.spec.js
│   ├── plugins
│   │   ├── index.js
│   ├── support
│   │   ├── comandos.js
│   │   ├── index.js
│   ├── videos
│   │   ├── nome-do-video.mp4
├── node_modules
├── .gitignore
├── cypress.json
├── package.json
├── README.md
```

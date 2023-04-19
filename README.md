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
4. Selecione o arquivo de teste que deseja executar na interface do Cypress

## Executando via Linha de Comando

Para executar os testes via linha de comando, siga os seguintes passos:

1. Abra o terminal na pasta raiz do projeto.
2. Execute o seguinte comando para executar os testes no modo headless:
```
npx cypress run
```
ou
```
npm run test
```

## Estrutura do Projeto

O projeto está organizado da seguinte forma:
```
├── cypress
│   ├── 2e2
│   │   ├── test.json
│   ├── page-objects
│   │   ├── Page.js
│   ├── support
│   │   ├── comandos.js
│   │   ├── index.js
├── node_modules
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
├── README.md
```
## Padrão Page Objects

Neste projeto, optamos por utilizar o padrão Page Objects para organizar e modularizar nossos testes. Essa abordagem nos permite separar a lógica dos testes da lógica da página, o que torna o código mais legível, fácil de manter e de escalar.

Com o Page Objects, podemos criar uma classe para cada página do site e encapsular os elementos e comportamentos específicos de cada página em métodos e propriedades da classe. Dessa forma, nossos testes ficam mais simples e claros, pois não precisam lidar diretamente com a manipulação dos elementos da página.

O padrão Page Objects foi escolhido porque oferece uma maneira eficiente de organizar nossos testes e torná-los mais robustos e escaláveis. Além disso, essa abordagem é amplamente utilizada na comunidade de automação de testes e é recomendada para projetos que exigem manutenção constante.

## Contribuindo
Este projeto é aberto para contribuições. Caso deseje colaborar, siga os seguintes passos:

1. Crie um fork deste repositório
2. Crie uma branch para a sua feature (git checkout -b feature/minha-feature)
3. Faça as alterações necessárias
4. Faça o commit das suas alterações (git commit -m 'Adicionando minha feature')
5. Faça um push para a sua branch (git push origin feature/minha-feature)
6. Abra um Pull Request explicando as suas alterações e aguarde a revisão.

## Conclusão

Com este projeto de automação de casos no site do Agi Bank, conseguimos garantir que as funcionalidades do site estejam funcionando corretamente, além de economizar tempo e minimizar erros humanos em testes manuais. Esperamos que este projeto possa ser útil para outros desenvolvedores e que possamos continuar aprimorando e contribuindo para a comunidade.

## Licença
Este projeto está licenciado sob a licença MIT - consulte o arquivo LICENSE para obter detalhes.

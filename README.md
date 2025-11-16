# Projeto de Testes Automatizados com Cypress e Cucumber

Este projeto foi desenvolvido para o **Bootcamp QAzando** (Módulo 13) com o objetivo de ensinar aos alunos como automatizar testes utilizando **Cypress** e **Cucumber** em JavaScript. O foco é demonstrar boas práticas de automação, estruturação de testes e geração de relatórios.

## Objetivo
Mostrar aos alunos como criar, organizar e executar testes automatizados de forma eficiente, utilizando as ferramentas Cypress e Cucumber, além de gerar relatórios detalhados com o cypress-mochawesome-reporter.

## Componentes do Projeto
- **Cypress**: Framework de automação de testes end-to-end.
- **Cucumber**: Permite escrever cenários de teste em linguagem natural (Gherkin).
- **cypress-mochawesome-reporter**: Gera relatórios em HTML dos testes executados.
- **Estrutura de pastas**:
  - `cypress/e2e/features/`: Arquivos `.feature` com cenários de teste em Gherkin.
  - `cypress/support/pages/`: Page Objects para organização dos elementos e ações das páginas.
  - `cypress/support/step_definitions/`: Implementação dos passos dos cenários em JavaScript.
  - `cypress/reports/html/`: Relatórios gerados após a execução dos testes.
  - `cypress/screenshots/` e `cypress/videos/`: Evidências visuais dos testes.

## Guia de Instalação e Execução

### Pré-requisitos
- Node.js instalado
- npm instalado

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/IaraStevani/qazando-cypress-bdd-cucumber.git
   cd qazando-cypress-bdd-cucumber
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

### Execução dos Testes
- Para rodar os testes em modo headless e gerar relatórios:
  ```bash
  npx cypress run
  ```
- Para abrir o Cypress em modo interativo:
  ```bash
  npx cypress open
  ```
- Os relatórios serão gerados em `cypress/reports/html/index.html`.

## Documentação dos Componentes

### Features
- Localizadas em `cypress/e2e/features/`
- Exemplos: `login.feature`, `register_user.feature`
- Escritas em Gherkin, descrevem cenários de teste de forma legível.

### Pages
- Localizadas em `cypress/support/pages/`
- Exemplos: `home-page.js`, `login-page.js`, `register_user-page.js`
- Implementam o padrão Page Object, facilitando a manutenção dos testes.

### Steps
- Localizadas em `cypress/support/step_definitions/`
- Exemplos: `login_steps.js`, `register_user_steps.js`
- Contêm a implementação dos passos definidos nos arquivos `.feature`.

### Relatórios
- Gerados automaticamente após a execução dos testes.
- Acesse o relatório em `cypress/reports/html/index.html` para visualizar os resultados.

---

Sinta-se à vontade para contribuir ou adaptar este projeto para seus estudos e práticas de automação!

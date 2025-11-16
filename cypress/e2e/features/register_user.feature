# 1 - Criar meu cénario
Feature: Register User
    Eu como cliente 
    Quero me cadastrar no aplicativo
    Para fazer pedido de Compras

  Background: Access register screen
    Given I am on register screen

  Scenario: Nome vazio
    When I click on Register
    Then I see the message "O campo nome deve ser prenchido" on register

  Scenario: E-mail vazio
    And I fill name
    When I click on Register
    Then I see the message "O campo e-mail deve ser prenchido corretamente" on register

  Scenario: E-mail inválido
    And I fill name
    And I fill e-mail "invalidEmail"
    When I click on Register
    Then I see the message "O campo e-mail deve ser prenchido corretamente" on register

  Scenario: Senha vazio
    And I fill name
    And I fill e-mail "example@email.com"
    When I click on Register
    Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register

  Scenario: Senha inválido
    And I fill name
    And I fill e-mail "example@email.com"
    And I fill senha "123"
    When I click on Register
    Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register

  Scenario: Cadastro com sucesso
    And I fill my datas of register
    When I click on Register
    Then I see the message success message  on register

# 1 - Criar meu cénario

Feature: Login
    Eu como cliente
    Quero fazer login na aplicação 
    Para fazer um pedido de compra

  Scenario: E-mail vazio
    Given I am on login screen
    When I click on Login
    Then I see the message "E-mail inválido."

  Scenario: Senha vazio
    Given I am on login screen
    And Fill e-mail
    When I click on Login
    Then I see the message "Senha inválida."

  Scenario: Login com sucesso
    Given I am on login screen
    And i fill my credentials
    When I click on Login
    Then I see sucess message

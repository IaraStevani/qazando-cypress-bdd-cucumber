// 2 - transformar o gherkin e métodos

/// <reference types="cypress" />

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import registerUserPage from "../pages/register_user-page"


Given('I am on register screen', () => {
    registerUserPage.accessRegister()
})

Given('I fill name', () => {
    registerUserPage.fillName('Usuário Teste')
})

Given('I fill e-mail {string}', (emailValue) => {
    registerUserPage.fillEmail(emailValue)
})

Given('I fill senha {string}', (passwordValue) => {
    registerUserPage.fillPassword(passwordValue)
})

Given('I fill my datas of register', () => {
    registerUserPage.fillName('Usuário Teste')
    registerUserPage.fillEmail('example@email.com')
    registerUserPage.fillPassword('123456')
})

When('I click on Register', () => {
   registerUserPage.doRegister()
})

Then('I see the message {string} on register', (message) => {
    registerUserPage.checkErrorMessage(message)
})

Then('I see the message success message  on register', () => {
    registerUserPage.checkSuccessMessage('Usuário Teste')
})
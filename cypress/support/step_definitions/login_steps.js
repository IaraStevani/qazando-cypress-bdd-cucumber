// 2 - transformar o gherkin e métodos

/// <reference types="cypress" />

import {Given, When, Then, log} from "@badeball/cypress-cucumber-preprocessor"
import homePage from "../pages/home-page"
import loginPage from "../pages/login-page"

const email = 'example@email.com'
const password = '123456'

Given("I am on login screen", () => {
   homePage.acessLogin()
})

Given("Fill e-mail", () => {
   loginPage.fillEmail(email)
})

Given("i fill my credentials", () => {
   loginPage.fillEmail(email)
   loginPage.fillPassword(password)
})

When("I click on Login", () => {
   loginPage.doLogin()
})

Then("I see the message {string}", (message) => {    
   loginPage.checkErrorMessage(message)
})

Then("I see sucess message", () => {    
   loginPage.checkSuccessMessage(email)
})
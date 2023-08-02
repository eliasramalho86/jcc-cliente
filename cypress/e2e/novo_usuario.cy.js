/// <reference types="cypress" />
import faker from 'faker-br';
import Faker from 'faker-br/lib';


describe('validar campos', ()=>{
    const randomCpf = faker.br.cpf();
    var name = faker.name.firstName();
    var name2 = faker.name.lastName();
    var randomEmail = faker.internet.email();
    var phoneNumber = faker.phone.phoneNumber();   
    

    it('campos em branco', ()=>{
    const msgNomeObgt = 'span:contains("O nome completo é obrigatório")';
    const msgCelObgt = 'span:contains("O celular é obrigatório.")';
    const msgEmailObgt = 'span:contains("O e-mail é obrigatório.")';
        cy.cpfAleatorio()
        cy.cadastrar()

        cy.get(msgNomeObgt).should('be.visible')
        .should('have.text', 'O nome completo é obrigatório')

        cy.get(msgCelObgt).should('be.visible')
        .should('have.text', 'O celular é obrigatório.')

        cy.get(msgEmailObgt).should('be.visible')
        .should('have.text', 'O e-mail é obrigatório.')

    })

    it('telefone invalido', ()=>{
        const msgCelInv = 'span:contains("Número de celular inválido.")';
                
        cy.cpfAleatorio()
        cy.preencherCampo('input[name="fullName"]', name+' '+name2)
        cy.preencherCampo('input[name="cellPhone"]', '123456')
        cy.preencherCampo('input[name="email"]', randomEmail)
        cy.cadastrar()

        cy.get(msgCelInv).should('be.visible')
        .should('have.text', 'Número de celular inválido.')
    })

    it('email invalido', ()=>{
        const msgEmailInvl = 'span:contains("Digite um e-mail válido")';

        cy.cpfAleatorio()
        cy.preencherCampo('input[name="fullName"]', name+' '+name2)
        cy.preencherCampo('input[name="cellPhone"]', '11982445566')
        cy.preencherCampo('input[name="email"]', '12e3.com')
        cy.cadastrar()

        cy.get(msgEmailInvl).should('be.visible')
        .should('have.text', 'Digite um e-mail válido')

    })

    it('dados validos', ()=>{      
        const msgEsperada = 'p:contains("Falta apenas um passo para confirmar o cadastro ;)")'
        const msgDesejada = 'Falta apenas um passo para confirmar o cadastro ;)'

          cy.cpfAleatorio()
          cy.wait(1000)
          cy.preencherCampo('input[name="fullName"]', name+' '+name2)
          cy.preencherCampo('input[name="cellPhone"]', '11998877665')
          cy.preencherCampo('input[name="email"]', randomEmail)
          cy.cadastrar()
          cy.get(msgEsperada).should('be.visible')
          .should('have.text', msgDesejada)
    
    })

})

  

/// <reference types="cypress" />
import faker from 'faker-br';


describe('preencher campo', ()=>{
    const cpfCadastrado = '554.482.200-02'
    const msgCpfInvalido = 'form span.position-error';
    const randomCpf = faker.br.cpf();

    it('cpf de usuario ja cadastrado', ()=>{
        cy.campoCpf()
        .type(cpfCadastrado).type('{enter}')
        cy.get('.description')
        .should('have.text', 'Insira o token enviado:')
        cy.request({
            url: '/'
        }).then(response =>{
            expect(response.status).to.eq(200)
        })        
    })

    it('cpf invalido', ()=>{
        cy.campoCpf()
        .type(123456).type('{enter}')
        cy.get(msgCpfInvalido).should('be.visible')
        .should('have.text','CPF invalido');

    })
    it('cpf de usuario nao cadastrado', ()=>{
        const msgDesejada = 'p:contains("Ainda não temos o seu cadastro, mas você pode fazê-lo agora mesmo.")' +
        ':contains("É grátis, rápido e fácil!")';
        cy.cpfAleatorio()
        cy.wait(1000)
        cy.get(msgDesejada).should('be.visible')
        .should('have.text','Ainda não temos o seu cadastro, mas você pode fazê-lo agora mesmo. É grátis, rápido e fácil!')

        
                
       
    })
})



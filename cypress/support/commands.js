import faker from 'faker-br';


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Comando para acessar a home e localizar o campo cpf
Cypress.Commands.add('campoCpf', ()=>{
    //Acessar home da aplicacao
    cy.visit('/')
    //Localiza o campo cpf
    cy.get('input[placeholder="Informe o CPF do cliente"]')

})
// Comando para gerar um cpf aleatorio
Cypress.Commands.add('cpfAleatorio', ()=>{
    // Gerar o cpf aleatorio usando o 'faker-br'
    const randomCpf = faker.br.cpf();
    //Acessa pagina home da aplicacao
    cy.visit('/')
    //Localiza o elemento 
    cy.get('input[placeholder="Informe o CPF do cliente"]')
    //Preenche o campo com um cpf aleatorio e realiza o evento de pressionar o botao enter
    .type(randomCpf).type('{enter}')
})
// Comando para clciar no botao cadastar
Cypress.Commands.add('cadastrar', ()=>{
    // Localiza o elemento e realiza um evento de clique
    cy.get('button[name="cadastrar"]').click()

})
//Comando para preenher Campo passando valor
Cypress.Commands.add('preencherCampo', (selector, valor)=>{
    // Localiza o elemento e preence com o valor desejado
    cy.get(selector).type(valor)
   
})
// Comando para preencher o cmapo email com email aleatorio
Cypress.Commands.add('randomEmail', (selector)=>{
    // Gera email aleatorio usando o 'faker-br'
    const email = faker.internet.email();
// Localiza o elemento e preenche xom email  gerado
    cy.get(selector).type(email)
   
})
// Comando para preencher o campo de nome e sobrenome com nomes aleatórios
Cypress.Commands.add('randomName', (selector)=>{
    // Gera nome e sobrenome usando o 'faker-br'
    const name = faker.name.firstName()
    const name2 = faker.name.lastName()
    // Localizar o elemento e preenchê-lo com os nomes gerados
    cy.get(selector).type(name).type(name2)
})

    // Comando customizado para gerar um telefone usando 'faker-br'
Cypress.Commands.add('randomCellPhone', () => {
  // Gerar um número de telefone celular válido usando o 'faker-br'
  const telefoneCelular = faker.phone.phoneNumber('cell_phone');
  // Localizar o elemento e preenchê-lo com o número gerado
  cy.get('input[name="cellPhone"]').type(telefoneCelular);
});












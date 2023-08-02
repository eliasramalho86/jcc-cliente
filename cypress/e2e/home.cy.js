describe('home', ()=>{
    it('web deve estar online', ()=>{
        cy.request({
            url: '/'
        }).then(response =>{
            expect(response.status).to.eq(200)
        })
        cy.visit('/')
        cy.title().should('eq', 'Happy Mais')
    })
})


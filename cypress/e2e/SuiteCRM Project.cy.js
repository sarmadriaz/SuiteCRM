describe('SuiteCRM exercise' , () => {
    it('NewLead Functionality' ,() => {
        cy.NewLead();
    })


    it.only('Create Contact Functionality' ,() => {
        cy.Contact();
    })
})


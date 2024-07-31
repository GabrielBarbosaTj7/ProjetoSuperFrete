/// <reference types="Cypress"/>



Cypress.on('uncaught:exception', (err, runnable) => {
    // Retornar false para impedir que o Cypress falhe o teste em caso de exceção não tratada
    return false
})


    Cypress.Commands.add('preencherFormulario', (cepOrigem, formato, peso, altura, largura, comprimento, cepDestino) => {

        cy.get('#originPostcode').type(cepOrigem);
        cy.get('#object_format').click();
        cy.contains('li', formato).click();
        cy.get('#weight').click();
        cy.get('[data-value="0.3"]').click();
        cy.get('#packageHeight').type(altura);
        cy.get('#packageWidth').type(largura);
        cy.get('#packageDepth').type(comprimento);
        cy.get('#destinationPostcode').type(cepDestino);
        cy.get('[data-cy="calculator-submit"]').click();


        Cypress.Commands.add('formularioSemCepOrigem', (formato, peso, altura, largura, comprimento, cepDestino) => {

            cy.get('#object_format').click();
            cy.contains('li', formato).click();
            cy.get('#weight').click();
            cy.get('[data-value="0.3"]').click();
            cy.get('#packageHeight').type(altura);
            cy.get('#packageWidth').type(largura);
            cy.get('#packageDepth').type(comprimento);
            cy.get('#destinationPostcode').type(cepDestino);
            cy.get('[data-cy="calculator-submit"]').click();


            Cypress.Commands.add('preencherFormularioSemCepDestino', (cepOrigem, formato, peso, altura, largura, comprimento) => {

                cy.get('#originPostcode').type(cepOrigem);
                cy.get('#object_format').click();
                cy.contains('li', formato).click();
                cy.get('#weight').click();
                cy.get('[data-value="0.3"]').click();
                cy.get('#packageHeight').type(altura);
                cy.get('#packageWidth').type(largura);
                cy.get('#packageDepth').type(comprimento);
                cy.get('[data-cy="calculator-submit"]').click();

                Cypress.Commands.add('formularioDimensoesInvalidas', (cepOrigem, formato, peso, altura, largura, comprimento, cepDestino) => {

                    cy.get('#originPostcode').type(cepOrigem);
                    cy.get('#object_format').click();
                    cy.contains('li', formato).click();
                    cy.get('#weight').click();
                    cy.get('[data-value="0.3"]').click();
                    cy.get('#packageHeight').type(altura);
                    cy.get('#packageWidth').type(largura);
                    cy.get('#packageDepth').type(comprimento);
                    cy.get('#destinationPostcode').type(cepDestino);
                    cy.get('[data-cy="calculator-submit"]').click();

                });
            });
        });
    });

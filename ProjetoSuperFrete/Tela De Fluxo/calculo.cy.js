/// <reference types="Cypress"/>




/// Teste Sem Erro ///

describe.only('Tela de Cálculo - Fluxo Principal', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.viewport(1366, 768);
    cy.visit("https://web.superfrete.com/");
    cy.wait(10000); // Aguarda 10 segundos para carregar todos os elementos da página
  });

  it.only('Deve calcular o frete com desconto', () => {
    cy.preencherFormulario('08090-284', 'Caixa / Pacote', '300', '2', '11', '16', '05407-002');

    // Verifica se as informações de mini envios, PAC e SEDEX são exibidas



    cy.contains('PAC').should('be.visible');
    cy.contains('SEDEX').should('be.visible');
    cy.contains('Mini Envios').should('be.visible');
    
  });
});



/// Teste com Erros ///
describe.only('Tela de Cálculo - Fluxos de Erro', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.viewport(1366, 768);
    cy.visit('https://web.superfrete.com/');
    cy.wait(10000); // Aguarda 10 segundos para carregar todos os elementos da página
  });

  it.only('Deve exibir erro se CEP de origem não for informado', () => {
    cy.formularioSemCepOrigem('Caixa / Pacote', '300', '2', '11', '16', '05407-002');

    cy.contains('CEP de origem é obrigatório').should('be.visible');
  });

  it.only('Deve exibir erro se CEP de destino não for informado', () => {
    cy.preencherFormularioSemCepDestino('08090-284', 'Caixa / Pacote', '300', '2', '11', '16');

    cy.contains('CEP de destino é obrigatório').should('be.visible');
  });

  it.only('Deve exibir erros para dimensões inválidas', () => {
    cy.formularioDimensoesInvalidas('08090-284', 'Caixa / Pacote', '300', '0.3', '7', '12', '05407-002');


    cy.contains('Altura mínima 0.4 cm.').should('be.visible');
    cy.contains('Largura mínima 8 cm.').should('be.visible');
    cy.contains('Comprimento mínimo 13 cm.').should('be.visible');
  });
});



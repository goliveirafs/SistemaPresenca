describe("Acessar relatório de faltas com sucesso - TST-003", () => {
  it("Fluxo principal", () => {
    // Preparação: O sistema está funcionando corretamente, e o professor está autenticado no sistema e possui permissão para acessar os relatórios.
    cy.visit("https://goliveirafs.github.io/SistemaPresenca/"); // Substitua com a URL correta do seu aplicativo

    cy.get('input[id="email"]').type("professor1@escolaoctogono.com");
    cy.get('input[id="password"]').type("teste123");
    cy.get('button[id="btnLogIn"]').click();

    cy.visit("https://goliveirafs.github.io/SistemaPresenca/relatorio.html"); // Substitua com a URL correta do seu aplicativo

    // Clique no botão para gerar o relatório
    cy.get("#gerar-relatorio").click();

    // Resultado esperado: O sistema libera o relatório de faltas com base nas opções selecionadas e mostra na tela o número de faltas de cada aluno de acordo com as opções escolhidas.
    // Verifica se a tabela está presente na página e possui linhas na tabela
    cy.get("table.table")
      .should("be.visible")
      .find("tbody > tr")
      .should("have.length.gt", 0);
  });
});

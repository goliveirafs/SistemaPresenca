describe("Registrar faltas com sucesso - TST-002", () => {
  it("Fluxo principal", () => {
    // Preparação: O sistema está funcionando corretamente, e o professor está autenticado no sistema.
    cy.visit("https://goliveirafs.github.io/SistemaPresenca/"); // Substitua com a URL correta do seu aplicativo

    cy.get('input[id="email"]').type("professor1@escolaoctogono.com");
    cy.get('input[id="password"]').type("teste123");
    cy.get('button[id="btnLogIn"]').click();

    // 1. O professor seleciona a turma, a disciplina e a data da aula de acordo com o calendário.
    // Coloque aqui os comandos Cypress para selecionar a turma, disciplina e data da aula

    // 2. O sistema libera a lista de alunos matriculados na turma.
    // Coloque aqui os comandos Cypress para verificar se a lista de alunos é exibida corretamente

    // 3. O professor seleciona as opções presente ou falta na frente do nome do aluno.
    // Coloque aqui os comandos Cypress para selecionar as opções presente ou falta para cada aluno

    // Resultado esperado: As faltas são registradas no sistema e armazenadas no banco de dados
    // Verifique se as faltas estão registradas corretamente na tabela de acordo com os dados esperados
    cy.get("table")
      .should("be.visible")
      .within(() => {
        cy.contains("Aluno Silva").parent("tr").contains("Falta");
        cy.contains("Joao").parent("tr").contains("Falta");
        cy.contains("Felipe Campos").parent("tr").contains("Falta");
      });
  });
});

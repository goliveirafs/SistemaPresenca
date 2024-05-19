describe("Login no Aplicativo - TST-001", () => {
  it("Login bem-sucedido", () => {
    // 1. O usuário abre o aplicativo (navegar para a URL da aplicação)
    cy.visit("https://goliveirafs.github.io/SistemaPresenca/"); // substitua com a URL correta do seu aplicativo

    // 2. O sistema exibe a tela de login solicitando as credenciais de acesso
    cy.get('input[id="email"]').should("be.visible");
    cy.get('input[id="password"]').should("be.visible");
    cy.get('button[id="btnLogIn"]').should("be.visible");

    // 3. O usuário insere suas credenciais válidas nos campos correspondentes
    cy.get('input[id="email"]').type("professor1@escolaoctogono.com");
    cy.get('input[id="password"]').type("teste123");

    // 4. O sistema verifica as credenciais inseridas pelo usuário
    cy.get('button[id="btnLogIn"]').click();

    // Resultado esperado: O sistema autentica o usuário com sucesso e o redireciona para a tela principal do aplicativo
    cy.url().should("include", "/app.html"); // Verifique se o redirecionamento foi bem-sucedido
    cy.get("h2").contains("Registrar/Visualizar Presença"); // Ajuste este seletor com base no conteúdo da tela principal

    // Fluxo de Exceção: Caso o professor não consiga logar exibirá uma tela “Credenciais inválidas consulte o administrador”
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Credenciais inválidas consulte o administrador");
    });
  });

  it("Login mal-sucedido", () => {
    // 1. O usuário abre o aplicativo (navegar para a URL da aplicação)
    cy.visit("https://goliveirafs.github.io/SistemaPresenca/"); // substitua com a URL correta do seu aplicativo

    // 2. O sistema exibe a tela de login solicitando as credenciais de acesso
    cy.get('input[id="email"]').should("be.visible");
    cy.get('input[id="password"]').should("be.visible");
    cy.get('button[id="btnLogIn"]').should("be.visible");

    // 3. O usuário insere suas credenciais válidas nos campos correspondentes
    cy.get('input[id="email"]').type("professor@escolaoctogono.com");
    cy.get('input[id="password"]').type("teste123");

    // Fluxo de Exceção: Caso o professor não consiga logar exibirá uma tela “Credenciais inválidas consulte o administrador”
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Credenciais inválidas consulte o administrador");
    });
  });
});

describe("Primeiro teste", () => {
  it("acesso", () => {
    cy.visit("http://localhost:3000")
  })

  it("corpo", () => {
    cy.contains("teste").click()
  })

  it("redirecionamento", () => {
    cy.url().should("include", "/teste")
  })
})



describe("QASTUDENT Application", () => {
  it("passes", () => {
    cy.visit("https://qastudent-development.ogtlprojects.com");
  });
});

it("should navigate through Student Management and Course Management", () => {
  cy.get('a[href="/students"]').click();
  cy.url().should("include", "/students");

  cy.get('a[href="/courses"]').click();
  cy.url().should("include", "/courses");
});

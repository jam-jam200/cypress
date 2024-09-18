describe("QASTUDENT Application", () => {
  beforeEach(() => {
    cy.visit("https://qastudent-development.ogtlprojects.com");
  });

  it("should navigate through Student and Course Management", () => {
    cy.get('a[href="/students"]').should("be.visible").click();
    cy.url().should("include", "/students");

    // Ensure the "Course Management" link is visible and click it
    cy.get('a[href="/courses"]').should("be.visible").click();
    // Check if the URL has changed to include "/courses"
    cy.url().should("include", "/courses");
  });
});

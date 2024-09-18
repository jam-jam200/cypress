describe("QASTUDENT Application", () => {
  beforeEach(() => {
    cy.visit("https://qastudent-development.ogtlprojects.com");
  });

  it("should navigate through Student Management", () => {
    // Navigate to student management
    cy.get('a[href="/students"]').should("be.visible").click();
    cy.url().should("include", "/students");
  });

  it("should display the list of students", () => {
    // Navigate to student management and verify the list of students
    cy.get('a[href="/students"]').click();
    cy.get(".list-group").should("contain", "Adam Mustapha");
    cy.get(".list-group").should("contain", "Abdullahi Suleiman");
    cy.get(".list-group").should("contain", "Musa Adama");
  });

  it("should fill out and submit the Create Student form", () => {
    // Navigate to student management first
    cy.get('a[href="/students"]').click();

    // Wait for the "Create Student" button to appear
    cy.contains("Create Student").should("be.visible").click();

    // Fill out the form
    cy.get('input[name="first_name"]').type("Joy");
    cy.get('input[name="last_name"]').type("Edwin");
    cy.get('input[name="reg_no"]').type("19/202348");

    // Submit the form
    cy.get("#create_std").click();

    // Verify if the new student is added to the list
    cy.get(".list-group").should("contain", "Joy Edwin");
    cy.get(".list-group").should("contain", "19/202348");
  });

  // it("should navigate through Course Management", () => {
  //   // Navigate to course management
  //   cy.get('a[href="/courses"]').should("be.visible").click();
  //   cy.url().should("include", "/courses");
  // });
});

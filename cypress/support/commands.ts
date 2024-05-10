/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
	interface Chainable {
		/**
		 * Creates a directory with the specified title in the downloads/photos directory.
		 * @example cy.mkOuterDir('myNewFolder')
		 */
		mkOuterDir(outerFolderTitle: any): Chainable<void>;
		
		mkInnerDir(outerFolderTitle: any, innerFolderTitle: any): Chainable<void>;
	}
}

Cypress.Commands.add("mkOuterDir", (outerFolderTitle: any) => {
	const folderTitle = outerFolderTitle.replace(/\s/g, "_");
	const folderPath = `./downloads/photos/${folderTitle}`;
	cy.exec(`mkdir -p ${folderPath}`, {failOnNonZeroExit: false}).then(
		(result) => {
			if (result.code === 0) {
				cy.log(`Folder "${folderPath}" created successfully`);
			} else {
				cy.log(`Error creating folder "${folderPath}": ${result.stderr}`);
			}
		},
	);
	cy.wait(1000);
});

Cypress.Commands.add(
	"mkInnerDir",
	(outerFolderTitle: any, innerFolderTitle: any) => {
		outerFolderTitle = outerFolderTitle.replace(/\s/g, "_");
		innerFolderTitle = innerFolderTitle.replace(/\s/g, "_");
		const folderPath = `./${innerFolderTitle}`;
		cy.exec(
			`cd ./downloads/photos/${outerFolderTitle};  mkdir -p ${folderPath}`,
			{failOnNonZeroExit: false},
		).then((result) => {
			if (result.code === 0) {
				cy.log(`Folder '${innerFolderTitle}' created successfully`);
			} else {
				cy.log(`Error creating folder '${innerFolderTitle}': ${result.stderr}`);
			}
		});
		cy.wait(1000);
	},
);


import "cypress-if"
import {
	getActiveImage,
	getAllModelCards,
	getCarTitle,
	getManufactureTitle,
	openManufacturePageLink,
	openModelDetailsPage,
	selectLManufactureFromMenu,
	showNextImg
} from "../support/actions/chinaMobile.action"

/// <reference types="cypress" />

const selectManufacture = () => {
	describe("Should select Manufacture details page", () => {
		openManufacturePageLink().then($link => {
			walkThroughManufactureDetailsPage($link)
		})
	})
}

const walkThroughManufactureDetailsPage = (links: any) => {
	describe("should walk Manufacture model details page", () => {
		for (let i = 0; i < links.length; i++) {
			selectLManufactureFromMenu(i);
			createManufactureFolder();
			selectEachModel();
		}
	})
}

const createManufactureFolder = () => {
	describe("should create manufacture folder", () => {
		getManufactureTitle().then(manufactureTitle => {
			cy.mkOuterDir(manufactureTitle)
		})
	})
}

const selectEachModel = () => {
	describe("Select model from menu", () => {
		getAllModelCards().then($modelLinks => {
			walkThroughModels($modelLinks)
		})
	})
}

const walkThroughModels = ($modelLinks: any) => {
	describe("should walk through models", () => {
		for (let k = 0; k < $modelLinks.length; k++) {
			createModelFolder(k)
		}
	})
}


const createModelFolder = (model: any): any => {
	describe("should create model folder", (): any => {
		getManufactureTitle().then(manufactureTitle => {
			getCarTitle(model).then(modelTitle => {
				cy.mkInnerDir(manufactureTitle, modelTitle);
				cy.wait(500)
				openModelDetailsPage(model)
				cy.wait(500)
				downloadCarImages(manufactureTitle, modelTitle)
			})
			cy.go("back")
		})
	})
}


const downloadCarImages = (manufactureTitle: string, modelTitle: string) => {
	describe("should download 10 images of the car", () => {
		showNextImg().if().then($btn => {
			for (let z = 0; z <= 10; z++) {
				cy.wrap($btn).click({force: true});
				getActiveImage().if().then($img => {
					cy.log($img.prop("src"));
					cy.task("downloadImage",
						{
							imageUrl:
								$img.prop("src",),
							manufactureTitle,
							modelTitle
						}
					)
					cy.wait(500)
					;
				})
			}
		})
	})
}


describe("ChinaMobil.ru", () => {
	beforeEach(() => {
		cy.visit("/")
	})
	
	afterEach(() => {
		cy.wait(500)
	})
	
	it("should open chinaMobil.ru site", selectManufacture);
})

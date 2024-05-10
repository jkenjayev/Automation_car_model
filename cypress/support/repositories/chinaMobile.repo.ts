import "cypress-if"

export const menuRepo = {
	// car model in menu
	manufacture: (itemId: number) =>
		cy.get(".sm_hide .topmenu > .popupmenu").if().eq(itemId).find("a").if().first(),
	
	// car model details page link
	manufactureDetailsPageLink: () => cy.get("div.sm_hide > ul.topmenu > li.popupmenu > a").if(),
	
	// car table item
	allModelCards: () => cy.get("div.mdTable").if(),
	
	// car details page
	modelDetailsCard: () => cy.get("div.mdTable > div.mdDetail").if(),
	
	modelDetailsPageLink: (model: any) => cy.get("div.mdTable > div.mdDetail > div > a").if().eq(model),
	
	carTitle: (model: any) => cy.get("div.mdTable > div.mdTitle > div > h2").if().eq(model).invoke("text").if(),
	
	// next image btn
	nextImgBtn: () => cy.get(".fotorama__arr--next").if(),
	
	// car image
	carActiveImage: () => cy.get(".fotorama__active > img").if(),
	
	// car title
	manufactureTitle: () => cy.get(".VendorCaption > h1").if(),
};

export const {
	manufacture,
	manufactureDetailsPageLink,
	allModelCards,
	modelDetailsCard,
	manufactureTitle,
	modelDetailsPageLink,
	carActiveImage,
	nextImgBtn,
	carTitle
} = menuRepo;

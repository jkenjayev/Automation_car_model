export const menuRepo = {
	// car model in menu
	manufacture: (itemId: number) =>
		cy.get(".sm_hide .topmenu > .popupmenu").eq(itemId).find("a").first(),
	
	// car model details page link
	manufactureDetailsPageLink: () => cy.get("div.sm_hide > ul.topmenu > li.popupmenu > a"),
	
	// car table item
	allModelCards: () => cy.get("div.mdTable"),
	
	// car details page
	modelDetailsCard: () => cy.get("div.mdTable > div.mdDetail"),
	
	modelDetailsPageLink: (model: any) => cy.wrap(model).children("div.mdDetail").find("a").first(),
	// modelDetailsPageLink: (model: any) => cy.wrap(model).children(".ccnt").parent("a").first(),
	
	
	// next image btn
	nextImgBtn: () => cy.get(".fotorama__arr--next"),
	
	// car image
	carActiveImage: () => cy.get(".fotorama__active > img"),
	
	// car title
	manufactureTitle: () => cy.get(".VendorCaption > h1"),
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
} = menuRepo;

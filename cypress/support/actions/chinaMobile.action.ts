import "cypress-if";
import {
	allModelCards,
	carActiveImage,
	manufacture,
	manufactureDetailsPageLink,
	manufactureTitle,
	modelDetailsCard,
	modelDetailsPageLink,
	nextImgBtn,
	carTitle
} from "../repositories/chinaMobile.repo";

const chinaMobilAction = {
	//
	openManufacturePageLink: () => manufactureDetailsPageLink(),
	
	//
	selectLManufactureFromMenu: (itemId: number) =>
		manufacture(itemId).click({force: true}),
	
	
	// selectModel: () => model(),
	getAllModelCards: () => allModelCards(),
	
	
	//
	getCarTitle: (car: any) =>  carTitle(car),
	
	
	// car details page
	openModelDetailsPage: (modelCard: any) =>
		modelDetailsPageLink(modelCard).click({force: true}),
	
	//
	getActiveImage: () => carActiveImage(),
	
	//
	getAllModelDetails: () => modelDetailsCard(),
	
	//
	getManufactureTitle: () => manufactureTitle().if().invoke("text"),
	
	showNextImg: () => nextImgBtn()
};


export const {
	openManufacturePageLink,
	selectLManufactureFromMenu,
	openModelDetailsPage,
	getCarTitle,
	getAllModelDetails,
	getManufactureTitle,
	getAllModelCards,
	getActiveImage,
	showNextImg
} = chinaMobilAction;

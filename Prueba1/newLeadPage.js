//New Lead Page

import { Selector, t} from 'testcafe';

class NewLead{

	constructor(){

		this.registerLink = Selector('a').withText('Registrarse');

		this.emailInput = Selector('input').withAttribute('formcontrolname','email');

		this.passwordInput = Selector('input').withAttribute('formcontrolname','password');

		this.passwordConfirmInput = Selector('input').withAttribute('formcontrolname','confirmPassword');

		this.nameInput = Selector('input').withAttribute('formcontrolname','name');

		this.lastNameInput = Selector('input').withAttribute('formcontrolname', 'lastName');

		this.mexicoIcon = Selector('i').withAttribute('class', 'flag-icon flag-icon-mx');

		this.colombiaIcon = Selector('i').withAttribute('class', 'flag-icon flag-icon-co');
		
		this.phoneInput = Selector('input').withAttribute('formcontrolname', 'phone');

	}

	async createLead(email, password, confirmPassword, name, lastName, phone){

		await t
			.expect(this.registerLink.exists).ok()
			.click(this.registerLink);

		await t
			.expect(this.emailInput.exists).ok()
			.typeText(this.emailInput, email);

		await t
			.expect(this.passwordInput.exists).ok()
			.typeText(this.passwordInput, password);

		await t
			.expect(this.passwordConfirmInput.exists).ok()
			.typeText(this.passwordConfirmInput, confirmPassword);

		await t
			.expect(this.nameInput.exists).ok()
			.typeText(this.nameInput, name);

		await t
			.expect(this.lastNameInput.exists).ok()
			.typeText(this.lastNameInput, lastName);

		await t
			.expect(this.mexicoIcon.exists).ok()
			.click(this.mexicoIcon);

		await t
			.expect(this.colombiaIcon.exists).ok()
			.click(this.colombiaIcon);

		await t
			.expect(this.phoneInput.exists).ok()
			.typeText(this.phoneInput, phone);
	}

	async cancelCreate(){

	}
 
}

export default new NewLead();

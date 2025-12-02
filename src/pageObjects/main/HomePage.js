import { expect } from "@playwright/test";
import RegistrationForm from "../registration/RegistrationForm.js";
import BasePage from "./BasePage.js";


export default class HomePage  extends BasePage {
    constructor(page) {
        super(page, "/");
        this.signUpButton = page.getByText('Sign up');
    }

    async openSignUpForm() {
    await this.signUpButton.click();
    await expect(this.page.getByRole('button', { name: 'Register' })).toBeVisible();
    return new RegistrationForm(this.page);
    }
}
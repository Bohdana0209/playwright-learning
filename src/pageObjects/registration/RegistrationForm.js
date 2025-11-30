import BaseComponent from "../main/BaseComponent.js";
import { expect } from "@playwright/test";

export default class RegistrationForm extends BaseComponent {
    constructor(page) {
        super(page);
        this.page = page;
        this.container = page.locator('.modal-content');
        this.nameInput = this.container.locator('#signupName');
        this.lastNameInput = this.container.locator('#signupLastName');
        this.emailInput = this.container.locator('#signupEmail');
        this.passwordInput = this.container.locator('#signupPassword');
        this.repeatPasswordInput = this.container.locator('#signupRepeatPassword');
        this.registerButton = this.container.getByRole('button', { name: 'Register' });
        this.nameError = this.nameInput.locator('..').locator('.invalid-feedback');
        this.lastNameError = this.lastNameInput.locator('..').locator('.invalid-feedback');
        this.emailError = this.emailInput.locator('..').locator('.invalid-feedback');
        this.passwordError = this.passwordInput.locator('..').locator('.invalid-feedback');
        this.repeatPasswordError = this.repeatPasswordInput.locator('..').locator('.invalid-feedback');
    }

    async fillName({ value = '' }) {
        await this.nameInput.fill('');
        if (value !== '') {
            await this.nameInput.fill(value);
        }
        await this.nameInput.blur();
    }

    async fillLastName({ value = '' }) {
        await this.lastNameInput.fill('');
        if (value !== '') {
            await this.lastNameInput.fill(value);
        }
        await this.lastNameInput.blur();
    }

    async fillEmail({ value = '' }) {
        await this.emailInput.fill('');
        if (value !== '') {
            await this.emailInput.fill(value);
        }
        await this.emailInput.blur();
    }

    async fillPassword(value) {
        await this.passwordInput.fill(value);
    }

    async fillRepeatPassword(value) {
        await this.repeatPasswordInput.fill(value);
    }
    
    async fillPasswordAndBlur({ value = '' }) {
        await this.passwordInput.fill('');
        if (value !== '') {
            await this.passwordInput.fill(value);
        }
        await this.passwordInput.blur();
    }
    
    async fillRepeatPasswordAndBlur({ value = '' }) {
        await this.repeatPasswordInput.fill('');
        if (value !== '') {
            await this.repeatPasswordInput.fill(value);
        }
        await this.repeatPasswordInput.blur();
    }

    async clickRegister() {
        await this.registerButton.click();
    }

}
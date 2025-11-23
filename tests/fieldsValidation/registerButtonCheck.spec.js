import { expect, test } from "@playwright/test";

test.describe("Register button validation", () => {
test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const signupButton = page.getByRole("button", { name: 'Sign up' });
    await signupButton.click();
    

});

test('button disabled when all fields empty', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const firstNameInput = signupPopup.locator('#signupName');
    await firstNameInput.fill("");
    await firstNameInput.blur();
    const lastNameInput = signupPopup.locator('#signupLastName');
    await lastNameInput.fill("");
    await lastNameInput.blur();
    const emailInput = signupPopup.locator('#signupEmail');
    await emailInput.fill("");
    await emailInput.blur();
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("");
    await passwordInput.blur();
    const repeatPasswordInput = signupPopup.locator('#signupRepeatPassword');
    await repeatPasswordInput.fill("");
    await repeatPasswordInput.blur();
    const registerButton = signupPopup.getByRole("button", { name: 'Register' });
    await expect(registerButton).toBeDisabled();
});

test('button disabled when email invalid', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const firstNameInput = signupPopup.locator('#signupName');
    await firstNameInput.fill("Bohdana");
    await firstNameInput.blur();
    const lastNameInput = signupPopup.locator('#signupLastName');
    await lastNameInput.fill("Teretska");
    await lastNameInput.blur();
    const emailInput = signupPopup.locator('#signupEmail');
    await emailInput.fill("testgmail.com");
    await emailInput.blur();
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("Password1#");
    await passwordInput.blur();
    const repeatPasswordInput = signupPopup.locator('#signupRepeatPassword');
    await repeatPasswordInput.fill("Password1#");
    await repeatPasswordInput.blur();
    const registerButton = signupPopup.getByRole("button", { name: 'Register' });
    await expect(registerButton).toBeDisabled();
});

test('button disabled when passwords do not match', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const firstNameInput = signupPopup.locator('#signupName');
    await firstNameInput.fill("Bohdana");
    await firstNameInput.blur();
    const lastNameInput = signupPopup.locator('#signupLastName');
    await lastNameInput.fill("Teretska");
    await lastNameInput.blur();
    const emailInput = signupPopup.locator('#signupEmail');
    await emailInput.fill("test@gmail.com");
    await emailInput.blur();
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("Password1#");
    await passwordInput.blur();
    const repeatPasswordInput = signupPopup.locator('#signupRepeatPassword');
    await repeatPasswordInput.fill("Password1!");
    await repeatPasswordInput.blur();
    const registerButton = signupPopup.getByRole("button", { name: 'Register' });
    await expect(registerButton).toBeDisabled();
});

test('button disabled when repeat passwords empty', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const firstNameInput = signupPopup.locator('#signupName');
    await firstNameInput.fill("Bohdana");
    await firstNameInput.blur();
    const lastNameInput = signupPopup.locator('#signupLastName');
    await lastNameInput.fill("Teretska");
    await lastNameInput.blur();
    const emailInput = signupPopup.locator('#signupEmail');
    await emailInput.fill("test@gmail.com");
    await emailInput.blur();
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("Password1#");
    await passwordInput.blur();
    const repeatPasswordInput = signupPopup.locator('#signupRepeatPassword');
    await repeatPasswordInput.fill("");
    await repeatPasswordInput.blur();
    const registerButton = signupPopup.getByRole("button", { name: 'Register' });
    await expect(registerButton).toBeDisabled();
});

test('button disabled when name is empty', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const firstNameInput = signupPopup.locator('#signupName');
    await firstNameInput.fill("");
    await firstNameInput.blur();
    const lastNameInput = signupPopup.locator('#signupLastName');
    await lastNameInput.fill("Teretska");
    await lastNameInput.blur();
    const emailInput = signupPopup.locator('#signupEmail');
    await emailInput.fill("test@gmail.com");
    await emailInput.blur();
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("Password1#");
    await passwordInput.blur();
    const repeatPasswordInput = signupPopup.locator('#signupRepeatPassword');
    await repeatPasswordInput.fill("Password1#");
    await repeatPasswordInput.blur();
    const registerButton = signupPopup.getByRole("button", { name: 'Register' });
    await expect(registerButton).toBeDisabled();
});

test('button enabled when all fields are valid', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const firstNameInput = signupPopup.locator('#signupName');
    await firstNameInput.fill("Bohdana");
    await firstNameInput.blur();
    const lastNameInput = signupPopup.locator('#signupLastName');
    await lastNameInput.fill("Teretska");
    await lastNameInput.blur();
    const emailInput = signupPopup.locator('#signupEmail');
    await emailInput.fill("aqatest+2311@gmail.com");
    await emailInput.blur();
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("Password1#");
    await passwordInput.blur();
    const repeatPasswordInput = signupPopup.locator('#signupRepeatPassword');
    await repeatPasswordInput.fill("Password1#");
    await repeatPasswordInput.blur();
    const registerButton = signupPopup.getByRole("button", { name: 'Register' });
    await expect(registerButton).toBeEnabled();
});
});
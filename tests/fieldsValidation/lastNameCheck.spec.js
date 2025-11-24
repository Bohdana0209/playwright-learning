import { expect, test } from "@playwright/test";

test.describe("Last name field validation", () => {
test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const signupButton = page.getByRole("button", { name: 'Sign up' });
    await signupButton.click();
    

});

test('Should show error for too short, length 2..20', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const lastNameInput = signupPopup.locator('#signupLastName');
    await lastNameInput.fill("C");
    await lastNameInput.blur();
    const lastNameError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(lastNameError).toHaveText('Last name has to be from 2 to 20 characters long');
});

test('Should show error for too long, length 2..20', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const lastNameInput = signupPopup.locator('#signupLastName');
    await lastNameInput.fill("ABCDEFGHIJKLMNOPQRSTU");
    await lastNameInput.blur();
    const lastNameError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(lastNameError).toHaveText('Last name has to be from 2 to 20 characters long');
});

test('Should show error for invalid symbols', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const lastNameInput = signupPopup.locator('#signupLastName');
    await lastNameInput.fill("Test!*");
    await lastNameInput.blur();
    const lastNameError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(lastNameError).toHaveText('Last name is invalid');
});

test('Should show error for empty field', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const lastNameInput = signupPopup.locator('#signupLastName');
    await lastNameInput.fill("");
    await lastNameInput.blur();
    const lastNameError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(lastNameError).toHaveText('Last name required');
});

test('Should NOT show error for valid last name', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const lastNameInput = signupPopup.locator('#signupLastName');
    await lastNameInput.fill("Bohdana");
    await lastNameInput.blur();
    const lastNameError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(lastNameError).toBeHidden();
});
});
import { expect, test } from "@playwright/test";

test.describe("First name field validation", () => {
test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const signupButton = page.getByRole("button", { name: 'Sign up' });
    await signupButton.click();
    

});

test('Should show error for too short, length 2..20', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const firstNameInput = signupPopup.locator('#signupName');
    await firstNameInput.fill("C");
    await firstNameInput.blur();
    const firstNameError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(firstNameError).toHaveText('Name has to be from 2 to 20 characters long');
});

test('Should show error for too long, length 2..20', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const firstNameInput = signupPopup.locator('#signupName');
    await firstNameInput.fill("ABCDEFGHIJKLMNOPQRSTU");
    await firstNameInput.blur();
    const firstNameError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(firstNameError).toHaveText('Name has to be from 2 to 20 characters long');
});

test('Should show error for invalid symbols', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const firstNameInput = signupPopup.locator('#signupName');
    await firstNameInput.fill("Test!*");
    await firstNameInput.blur();
    const firstNameError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(firstNameError).toHaveText('Name is invalid');
});

test('Should show error for empty field', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const firstNameInput = signupPopup.locator('#signupName');
    await firstNameInput.fill("");
    await firstNameInput.blur();
    const firstNameError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(firstNameError).toHaveText('Name required');
});

test('Should NOT show error for valid first name', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const firstNameInput = signupPopup.locator('#signupName');
    await firstNameInput.fill("Test");
    await firstNameInput.blur();
    const firstNameError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(firstNameError).toBeHidden();
});
});
import { expect, test } from "@playwright/test";

test.describe("Password field validation", () => {
test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const signupButton = page.getByRole("button", { name: 'Sign up' });
    await signupButton.click();
    

});

test('Should show error for only spaces', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill(" ");
    await passwordInput.blur();
    const passwordInputError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(passwordInputError).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
});

test('Should show error for too short, 7 chars', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("Abcdef1");
    await passwordInput.blur();
    const passwordInputError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(passwordInputError).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
});

test('Should show error for too long, 16 chars', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("Abcdefghijklm1AРЕР");
    await passwordInput.blur();
    const passwordInputError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(passwordInputError).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
});

test('Should show error for no digit', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("AbcdefGh");
    await passwordInput.blur();
    const passwordInputError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(passwordInputError).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
});

test('Should show error for no uppercase letter', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("abcdefg1");
    await passwordInput.blur();
    const passwordInputError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(passwordInputError).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
});

test('Should show error for no lowercase letter', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("ABCDEFG1");
    await passwordInput.blur();
    const passwordInputError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(passwordInputError).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
});

test('Should show error for only digits', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("12345678");
    await passwordInput.blur();
    const passwordInputError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(passwordInputError).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
});

test('Should show error for only letters (no digits)', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("Abcdefgh");
    await passwordInput.blur();
    const passwordInputError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(passwordInputError).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
});

test('Should show error for empty field)', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("");
    await passwordInput.blur();
    const passwordInputError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(passwordInputError).toHaveText('Password required');
});

test('Should NOT show error for password)', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("Password1#");
    await passwordInput.blur();
    const passwordInputError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(passwordInputError).toBeHidden();
});
});
import { expect, test } from "@playwright/test";

test.describe("Email field validation", () => {
test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const signupButton = page.getByRole("button", { name: 'Sign up' });
    await signupButton.click();
    

});

test('Should show error for without @ symbol', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const emailInput = signupPopup.locator('#signupEmail');
    await emailInput.fill("aqatestgmail.com");
    await emailInput.blur();
    const emailError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(emailError).toHaveText('Email is incorrect');
});

test('Should show error for email without . symbol', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const emailInput = signupPopup.locator('#signupEmail');
    await emailInput.fill("aqatest@gmailcom");
    await emailInput.blur();
    const emailError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(emailError).toHaveText('Email is incorrect');
});

test('Should show error for email without domain name', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const emailInput = signupPopup.locator('#signupEmail');
    await emailInput.fill("username@");
    await emailInput.blur();
    const emailError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(emailError).toHaveText('Email is incorrect');
});

test('Should show error for only spaces', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const emailInput = signupPopup.locator('#signupEmail');
    await emailInput.fill(" ");
    await emailInput.blur();
    const emailError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(emailError).toHaveText('Email is incorrect');
});

test('Should show error for empty field', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const emailInput = signupPopup.locator('#signupEmail');
    await emailInput.fill("");
    await emailInput.blur();
    const emailError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(emailError).toHaveText('Email required');
});

test('Should NOT show error for valid email', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const emailInput = signupPopup.locator('#signupEmail');
    await emailInput.fill("aqabohdana@gmail.com");
    await emailInput.blur();
    const emailError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(emailError).toBeHidden();
});
});
import { expect, test } from "@playwright/test";

test.describe("Password field validation", () => {
test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const signupButton = page.getByRole("button", { name: 'Sign up' });
    await signupButton.click();


  });

test('Should show error when passwords do not match', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("Password1##");
    await passwordInput.blur();
    const repeatPasswordInput = signupPopup.locator('#signupRepeatPassword');
    await repeatPasswordInput.fill("Password1!");
    await repeatPasswordInput.blur();
    const repeatPasswordError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(repeatPasswordError).toHaveText('Passwords do not match');
  });

test('Should show error when only spaces', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const repeatPasswordInput = signupPopup.locator('#signupRepeatPassword');
    await repeatPasswordInput.fill(" ");
    await repeatPasswordInput.blur();
    const repeatPasswordError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(repeatPasswordError).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
  });

test('Should show error when empty field', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("Password1##");
    await passwordInput.blur();
    const repeatPasswordInput = signupPopup.locator('#signupRepeatPassword');
    await repeatPasswordInput.fill("");
    await repeatPasswordInput.blur();
    const repeatPasswordError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(repeatPasswordError).toHaveText('Re-enter password required');
  });

test('Should NOT show error when valid passwords', async ({ page }) => {

    const signupPopup = page.locator('.modal-content');
    const passwordInput = signupPopup.locator('#signupPassword');
    await passwordInput.fill("Password1##");
    await passwordInput.blur();
    const repeatPasswordInput = signupPopup.locator('#signupRepeatPassword');
    await repeatPasswordInput.fill("Password1##");
    await repeatPasswordInput.blur();
    const repeatPasswordError = signupPopup.locator('..').locator('.invalid-feedback');
    await expect(repeatPasswordError).toBeHidden();
  });
});
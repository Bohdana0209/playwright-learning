import { test, expect } from "@playwright/test";
import HomePage from "../../src/pageObjects/main/HomePage.js";
import RegistrationForm from "../../src/pageObjects/registration/RegistrationForm.js";
import passwords from '../fixtures/passwords.json' assert { type: 'json' };

test.describe("Password validation", () => {

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();        
    await homePage.openSignUpForm();  
  });

  for (const { title, input, expected } of passwords) {
    test(title, async ({ page }) => {
      const form = new RegistrationForm(page);

      await form.fillPasswordAndBlur({ value: input.password });

      await expect(form.passwordError).toHaveText(expected.message);
    });
  }

});
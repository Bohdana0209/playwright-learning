import { test, expect } from "@playwright/test";
import HomePage from "../../src/pageObjects/main/HomePage.js";
import RegistrationForm from "../../src/pageObjects/registration/RegistrationForm.js";
import repeatPassword from '../fixtures/repeatPassword.json' assert { type: 'json' };

test.describe("Repeat password validation", () => {
  let form;
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();        
    form = await homePage.openSignUpForm();  
  });

  for (const { title, input, expected } of repeatPassword) {
    test(title, async ({ page }) => {

      await form.fillPassword(input.password );

      await form.fillRepeatPasswordAndBlur({ value: input.reenter });

      await expect(form.repeatPasswordError).toHaveText(expected.message);
    });
  }

});
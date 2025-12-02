import { test, expect } from "@playwright/test";
import HomePage from "../../src/pageObjects/main/HomePage.js";
import RegistrationForm from "../../src/pageObjects/registration/RegistrationForm.js";
import registerButton from '../fixtures/registerButton.json' assert { type: 'json' };

test.describe("Register button check", () => {
    let form;
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();        
    form = await homePage.openSignUpForm(); 
  });

  for (const { title, input, expected } of registerButton) {
    test(title, async ({ page }) => {
      
      await form.fillName({ value: input.name });
      await form.fillLastName({ value: input.lastName });
      await form.fillEmail({ value: input.email });
      await form.fillPasswordAndBlur({ value: input.password });
      await form.fillRepeatPasswordAndBlur({ value: input.repeatPassword });

      if (expected.enabled) {
        await expect(form.registerButton).toBeEnabled();
      } else {
        await expect(form.registerButton).toBeDisabled();
      }
    });
  }

});
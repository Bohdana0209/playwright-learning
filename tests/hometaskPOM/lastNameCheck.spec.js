import { test, expect } from "@playwright/test";
import HomePage from "../../src/pageObjects/main/HomePage.js";
import RegistrationForm from "../../src/pageObjects/registration/RegistrationForm.js";
import lastNames from '../fixtures/lastNames.json' assert { type: 'json' };

test.describe("Last name validation", () => {
  let form;
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();        
    form = await homePage.openSignUpForm(); 
  });

  for (const { title, input, expected } of lastNames) {
    test(title, async ({ page }) => {
      
      await form.fillLastName({ value: input.lastName });

      await expect(form.lastNameError).toHaveText(expected.message);
    });
  }

});
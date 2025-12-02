import { test, expect } from "@playwright/test";
import HomePage from "../../src/pageObjects/main/HomePage.js";
import RegistrationForm from "../../src/pageObjects/registration/RegistrationForm.js";
import firstName from '../fixtures/firstNames.json' assert { type: 'json' };

test.describe("First name validation", () => {
  let form;
  test.beforeEach(async ({ page }) => {
   const homePage = new HomePage(page);
   
       await homePage.navigate();        
       form = await homePage.openSignUpForm(); 
  });

  for (const { title, input, expected } of firstName) {
    test(title, async ({ page }) => {

      await form.fillName({ value: input.name });

      await expect(form.nameError).toHaveText(expected.message);
    });
  }

});
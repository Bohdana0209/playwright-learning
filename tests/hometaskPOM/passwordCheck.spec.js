import { test, expect } from "@playwright/test";
import HomePage from "../../src/pageObjects/main/HomePage.js";
import passwords from '../fixtures/passwords.json' assert { type: 'json' };

test.describe("Password validation", () => {
  let form;
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();        
   form = await homePage.openSignUpForm();  
  });

  for (const { title, input, expected } of passwords) {
    test(title, async ({ page }) => {

      await form.fillPasswordAndBlur({ value: input.password });

      await expect(form.passwordError).toHaveText(expected.message);
    });
  }

});
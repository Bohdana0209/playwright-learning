import { test, expect } from "@playwright/test";
import HomePage from "../../src/pageObjects/main/HomePage.js";
import email from '../fixtures/email.json' assert { type: 'json' };

test.describe("Email validation — loop version", () => {
  let form;
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();        
    form = await homePage.openSignUpForm();
  });

  for (const { title, input, expected } of email) {
    test(title, async ({ page }) => {
      
      await form.fillEmail({ value: input.email });

      await expect(form.emailError).toHaveText(expected.message);
    });
  }

});